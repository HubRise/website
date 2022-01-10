import { ArchiveInfo } from "@layouts/shared/components/Blog/interface"
import { RootContext } from "@utils/context"

export interface BlogListContext extends RootContext {
  archive?: ArchiveInfo
  mainBlogPath: string
}
