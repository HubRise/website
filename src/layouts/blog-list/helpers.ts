import { BlogNode } from "@layouts/shared/components/Blog/shared/interface"

export function sortMdxBlogNodesByDescendingDate(mdxNodes: Array<BlogNode>): Array<BlogNode> {
  return mdxNodes.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}
