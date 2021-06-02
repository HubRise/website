import {
  Folder,
  FolderFiles,
  getFolderPath,
  MDXDocumentationNode
} from './folder'
import { LocaleCode } from '../../../utils/locales'
import { FolderPage } from '../../../layouts/documentation'

/**
 * Returns the path of a documentation page on the website with a leading slash (eg "/fr/deliveroo/map-ref-codes").
 * @param folder: the folder containing the MDX node
 * @param mdxNode: the MDX node
 * @param localeCode: the locale of the page
 */
export function getPagePath(
  folder: Folder,
  mdxNode: MDXDocumentationNode,
  localeCode: LocaleCode
): string {
  const path = getFolderPath(folder, localeCode)

  const name = mdxNode.frontmatter.path_override || mdxNode.parent.name

  if (name === '/') {
    return path
  } else {
    return `${path}/${name}`
  }
}

export function getFolderPages(
  folder: Folder,
  folderFiles: FolderFiles,
  localeCode: LocaleCode
): Array<FolderPage> {
  return folderFiles.mdxNodes.map((mdxNode) => {
    return {
      path: getPagePath(folder, mdxNode, localeCode),
      title: mdxNode.frontmatter.title
    }
  })
}
