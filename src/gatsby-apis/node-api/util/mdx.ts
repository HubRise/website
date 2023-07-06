export type MdxNodeType = "documentation" | "blog"

/**
 * Returns the type of the node.
 * @param contentFilePath The absolute path of the node's file.
 */
export const mdxNodeType = (contentFilePath: string): MdxNodeType => {
  return contentFilePath.includes("/content/blog/") ? "blog" : "documentation"
}
