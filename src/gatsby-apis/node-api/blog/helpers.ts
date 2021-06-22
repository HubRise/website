import { LocaleCode } from '../../../utils/locales'
import { MDXBlogNode } from './graphql'
import { parseRelativePath } from '../util/locale'

export function filterNodesByLocale(
  nodes: Array<MDXBlogNode>,
  localeCode: LocaleCode
): Array<MDXBlogNode> {
  // MDX files must be in a directory ending in /en or /fr, indicating the locale code of the MDX.
  return nodes.filter(
    (node) => parseRelativePath(node.slug).localeCode === localeCode
  )
}
