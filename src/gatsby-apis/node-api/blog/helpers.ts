import { LocaleCode } from "../../../utils/locales"

import { MDXBlogNode } from "./graphql"

export function filterNodesByLocale(nodes: Array<MDXBlogNode>, localeCode: LocaleCode): Array<MDXBlogNode> {
  return nodes.filter((node) => node.internal.contentFilePath.includes(`/blog/${localeCode}/`))
}

export function parseMdxNodePath(contentFilePath: string): { localeCode: LocaleCode; name: string } {
  // Example contentFilePath: /var/www/website/content/blog/en/20230510-catalog-variants/__post.md
  const slugElements = contentFilePath.split("/").reverse()
  const [, folder, localeCode] = slugElements

  return {
    localeCode: localeCode as LocaleCode,
    name: folder.replace(/^\d{8}-/, ""), // Strip the date
  }
}
