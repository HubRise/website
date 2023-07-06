import { LocaleCode } from "../../../utils/locales"
import { FolderPage } from "../../../layouts/documentation"

import { Folder, FolderFiles, getFolderPath, MDXDocumentationNode } from "./folder"

/**
 * Returns the path of a documentation page on the website with a leading slash (eg "/fr/deliveroo/map-ref-codes").
 * @param folder: the folder containing the MDX node
 * @param mdxNode: the MDX node
 * @param localeCode: the locale of the page
 */
export function getPagePath(folder: Folder, mdxNode: MDXDocumentationNode, localeCode: LocaleCode): string {
  const path = getFolderPath(folder, localeCode)
  const name = mdxNode.frontmatter.path_override || mdxNode.parent.name
  return mergePaths(path, name)
}

export function getFolderPages(folder: Folder, folderFiles: FolderFiles, localeCode: LocaleCode): Array<FolderPage> {
  const documentationMdxNodes = folderFiles.mdxNodes.filter((node) => node.frontmatter.layout === "documentation")
  return documentationMdxNodes.map((node) => ({
    path: getPagePath(folder, node, localeCode),
    title: node.frontmatter.title,
  }))
}

export function mergePaths(...paths: Array<string>): string {
  return (
    "/" +
    paths
      .map((path) => path.replace(/(^\/)|(\/$)/g, ""))
      .filter((path) => path.length > 0)
      .join("/") +
    "/"
  )
}
