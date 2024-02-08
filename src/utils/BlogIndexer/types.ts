import { Href } from "@utils/DocIndexer/types"
import { ContentDirName } from "@utils/files"
import { Language } from "@utils/locales"

export interface BlogFrontMatter {
  title: string
  path_override: string
  date: string
  author: string
  meta: {
    description?: string
    title?: string
  }
  excerpt?: string
}

export interface BlogMdFile {
  contentDirName: ContentDirName
  baseName: string
  uri: Href
  language: Language
  copyFromLanguage?: Language
  frontMatter: BlogFrontMatter
  content: string
  bannerFileName?: string
}

export interface BlogArchives {
  years: Array<{ year: number; uri: Href }>
}
