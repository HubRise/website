import { RootContext } from "@utils/context"

export interface BlogPostContext extends RootContext {
  mainBlogPath: string
  mdxNodeId: string
}
