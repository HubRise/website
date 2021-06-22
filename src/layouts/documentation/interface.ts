import { Breadcrumb } from '@components/Breadcrumbs'
import { RootContext } from '@utils/context'

export interface DocumentationContext extends RootContext {
  /** Array of paths leading up to the page. */
  breadcrumbs: Array<Breadcrumb>
  /** List of neighbour pages of the current page, sorted by position. Used for navigation. */
  folderPages: Array<FolderPage>
  /** The chapter title, eg "Deliveroo Bridge" */
  folderTitle: string
  /** The logo filename, eg "deliveroo.png" */
  logoImageName?: string
  /** The id of the MDX node */
  mdXNodeId: string
  /** The path of the images directory, relative to "content", with no leading slash (eg "contributing/images"). */
  imagesRelativeDirectory: string
}

export interface FolderPage {
  path: string
  title: string
}
