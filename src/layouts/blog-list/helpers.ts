import { BlogNode } from '@components/blog/Post/interface'

export function sortMdxBlogNodesByDescendingDate(
  mdxNodes: Array<BlogNode>
): Array<BlogNode> {
  return mdxNodes.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )
}
