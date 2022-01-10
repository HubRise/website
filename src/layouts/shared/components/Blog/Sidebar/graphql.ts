import { graphql, useStaticQuery } from "gatsby"

import { LocaleCode } from "@utils/locales"

export interface SidebarArticle {
  date: string
  title: string
  localeCode: LocaleCode
  path: string
}

interface SidebarData {
  allMdx: {
    nodes: Array<{
      fields: {
        localeCode: LocaleCode
        path: string
      }
      frontmatter: {
        date
        title
      }
    }>
  }
}

export function useSidebarData(): Array<SidebarArticle> {
  const data = useStaticQuery<SidebarData>(graphql`
    query getSidebarData {
      allMdx(filter: { slug: { regex: "/^blog//" } }) {
        nodes {
          fields {
            localeCode
            path
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  `)

  const result: Array<SidebarArticle> = []
  for (const node of data.allMdx.nodes) {
    const { date, title } = node.frontmatter
    const { localeCode, path } = node.fields
    result.push({
      date,
      title,
      localeCode,
      path,
    })
  }
  return result
}
