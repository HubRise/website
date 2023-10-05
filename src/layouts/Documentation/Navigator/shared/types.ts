import { DocFolder, DocMdFile } from "@utils/DocIndexer/types"
import { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"

export interface NavigatorProps {
  mdFile: DocMdFile
  folder: DocFolder
  headerLinks: Array<HeaderLink>
}
