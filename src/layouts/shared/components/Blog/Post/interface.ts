import { LocaleCode } from "@utils/locales"

export interface BlogNode {
  fields: {
    localeCode: LocaleCode
    path: string
  }
  frontmatter: {
    author: string
    date: string
    excerpt?: string
    title: string
  }
  body: string
}
