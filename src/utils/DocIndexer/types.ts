import { ContentDirName } from "@utils/files"
import { Language } from "@utils/locales"

export type Href = `/${string}`

export interface DocLink {
  label: string
  uri: Href
}

export interface FolderCustomisation {
  name: string
  path_override?: string
  copy_files_from?: Language
  logo?: string
}

export interface DocFrontMatter {
  title: string
  path_override?: string
  position?: number
  layout?: string
  meta: {
    description?: string
    title?: string
  }
  gallery?: Array<string>
  app_info?: {
    category?: string
    availability?: string
    price_range?: string
    website?: string
    contact?: string
  }
}

export interface DocFolder {
  contentDirName: ContentDirName
  name: string
  uri: Href
  folderLinks: Array<DocLink>
  customisation: FolderCustomisation
}

export interface DocMdFile {
  contentDirName: ContentDirName
  baseName: string
  uri: Href
  language: Language
  copyFromLanguage?: Language
  frontMatter: DocFrontMatter
  content: string
  breadcrumbs: Array<DocLink>
}
