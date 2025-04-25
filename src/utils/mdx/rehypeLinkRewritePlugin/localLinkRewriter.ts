import { headerLinksFromMdx } from "@components/DocumentationMdxRenderer"
import { Href } from "@utils/DocIndexer/types"
import { ContentDirName } from "@utils/files"
import { defaultLanguage, Language } from "@utils/locales"
import { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"
import { Router } from "@utils/router"
import { LayoutName, Route, RouteName, RouteNameDocumentation } from "@utils/router/types"

export class LocalLinkRewriter {
  // path => header links
  private headerLinks: Map<Href, Array<HeaderLink>> = new Map()

  constructor(
    private router: Router,
    private language: Language,
    private pageHref: Href,
    private pageHeaderLinks: Array<HeaderLink>,
  ) {}

  /**
   * Rewrite a local link:
   * - Transform path links (e.g. `/apps/nestor/connect-hubrise`) to their corresponding route href (e.g. `/fr/apps/nestor/connexion-hubrise`).
   * - Transform custom anchors (e.g. `#connect`) to their generated anchor (e.g. `#connexion-hubrise`).
   * @param href The href to be rewritten.
   * @throws Error if the link or anchor does not exist.
   */
  async rewrite(href: string): Promise<string> {
    // eslint-disable-next-line prefer-const
    let [path, anchor] = href.split("#")

    // Find route
    const route = this.findRoute(path)

    // Rewrite anchor
    if (anchor) anchor = await this.rewriteAnchor(route, anchor)

    // Concatenate route href and anchor. Each may be empty, but not both.
    return route ? `${route.href}${anchor ? "#" + anchor : ""}` : `#${anchor}`
  }

  /**
   * Find the route matching the given path.
   * @param path
   * @returns The matching route, or null if the path is an anchor.
   * @throws Error if the path is invalid.
   */
  private findRoute(path: string): Route<RouteName, LayoutName> | null {
    // Remove trailing slash
    path = path.replace(/\/$/, "")

    // Return null if the link is simply an anchor (e.g. `#connect`)
    if (path === "") return null

    // Try to find route by filepath.
    // path = /apps/0test/faqs/connect-hubrise => contentDirName = "/apps/0test/faqs", basename = "connect-hubrise"
    let route: Route<RouteName, LayoutName> | undefined
    const pathElements = path.split("/")
    const basename = pathElements.pop()!
    const contentDirName = pathElements.join("/") as ContentDirName
    route = this.router.findDocumentationRoute(contentDirName, basename, this.language)
    if (route) return route

    // If route is not found, assume it is NOT a documentation route, and try to find it by href.
    const hrefWithLanguage = this.language === defaultLanguage ? path : `/${this.language}${path}`
    route = this.router.getRouteFromHref(hrefWithLanguage)
    if (route) {
      if (this.isDocumentationRoute(route)) {
        const filePath = route.params.contentDirName + "/" + route.params.basename
        throw new Error(`${this.pageHref}: replace "${path}" with "${filePath}"`)
      } else {
        return route
      }
    }

    // Throw error if no route was found
    throw new Error(`${this.pageHref}: link "${path}" not found`)
  }

  /**
   * Rewrite an anchor.
   * @param route If null, the anchor is assumed to be in the current page.
   * @param anchor
   * @private
   */
  private async rewriteAnchor(route: Route<RouteName, LayoutName> | null, anchor: string): Promise<string> {
    let headerLinks: Array<HeaderLink>

    if (route) {
      // Do not rewrite anchors in non-documentation routes
      if (!this.isDocumentationRoute(route)) return anchor

      // Get header links
      const href = route.href
      if (this.headerLinks.has(href)) {
        headerLinks = this.headerLinks.get(href)!
      } else {
        headerLinks = await headerLinksFromMdx(route.context.mdFile.content)
        this.headerLinks.set(href, headerLinks)
      }
    } else {
      headerLinks = this.pageHeaderLinks
    }

    // Find anchor
    const headerLink = headerLinks.find((link) => link.customId === anchor)
    if (!headerLink) {
      const anchors = headerLinks.map((link) => link.customId).filter(Boolean)
      throw new Error(
        `${this.pageHref}: anchor "${anchor}" does not exist in ${route?.href || this.pageHref}.\n` +
          `Available anchors: ${anchors.join(", ")}`,
      )
    }
    return headerLink.generatedId
  }

  private isDocumentationRoute(
    route: Route<RouteName, LayoutName>,
  ): route is Route<RouteNameDocumentation, "blog-post" | "documentation"> {
    return "mdFile" in route.context
  }
}
