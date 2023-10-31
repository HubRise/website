import { Element } from "hast"
import type { Processor } from "unified"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

import { getBackOfficeLocale, Language } from "@utils/locales"
import { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"
import { Router } from "@utils/router"

import { Href } from "../DocIndexer/types"

import { LocalLinkRewriter } from "./rehypeLinkRewritePlugin/localLinkRewriter"

/**
 * A Rehype plugin to rewrite anchor (`<a>`) href attributes in the documentation.
 *
 * - Local Links (links starting with `/`).  The path in the original link can either be:
 *   - A relative path without the language prefix (e.g. `/apps/nestor/connexion-hubrise`)
 *   - A filepath without the language prefix (e.g. `/apps/nestor/connect-hubrise`)
 *   The language prefix is added unless the current language is the default language.
 *
 * - HubRise Manager Link (https://manager.hubrise.com): the `locale` query parameter is added if not present.
 *
 * - External Links & Anchors: These are left untouched.
 *
 * @param router The Router instance
 * @param language The language to use for the links
 * @param pageHref The href of the rendered page, used for error reporting
 * @param pageHeaderLinks The header links of the current page
 */
export default function rehypeLinkRewritePlugin(
  router: Router,
  language: Language,
  pageHref: Href,
  pageHeaderLinks: Array<HeaderLink>,
) {
  return function plugin(this: Processor) {
    return async function transformer(tree: Node, _file: VFile): Promise<void> {
      const localLinkRewriter = new LocalLinkRewriter(router, language, pageHref, pageHeaderLinks)

      // visitor does not support async functions so we use it to generate an array of promises instead
      const promises: Promise<void>[] = []
      const visitor = (node: Element): void => {
        if (node.tagName === "a" && node.properties && node.properties.href) {
          promises.push(
            (async () => {
              let href = node.properties!.href as string
              if (href.startsWith("/") || href.startsWith("#")) {
                href = await localLinkRewriter.rewrite(href)
              } else if (href.startsWith("https://manager.hubrise.com") && !href.includes("locale=")) {
                const separator = href.includes("?") ? "&" : "?"
                href += separator + `locale=${getBackOfficeLocale(language)}`
              }
              node.properties!.href = href
            })(),
          )
        }
      }

      visit(tree, "element", visitor)
      await Promise.all(promises)
    }
  }
}
