import { CreatePagesArgs } from 'gatsby'
import { LocaleCode, localeCodes } from '../../../utils/locales'
import { filterNodesByLocale } from './helpers'

export interface BlogMDXNodesData {
  allMdx: {
    nodes: Array<MDXBlogNode>
  }
}

export interface MDXBlogNode {
  fields: {
    localeCode: LocaleCode
    path: string
  }
  frontmatter: {
    date: string
  }
  id: string
  slug: string
}

type NodesByLocale = Map<LocaleCode, Array<MDXBlogNode>>

export async function getNodesByLocale(
  graphql: CreatePagesArgs['graphql']
): Promise<NodesByLocale> {
  const { data, errors } = await graphql<BlogMDXNodesData>(`
    query getBlogPosts {
      allMdx(filter: { slug: { regex: "/^blog//" } }) {
        nodes {
          fields {
            localeCode
            path
          }
          frontmatter {
            date
          }
          id
          slug
        }
      }
    }
  `)

  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  const nodesByLocale = new Map<LocaleCode, Array<MDXBlogNode>>()
  for (let localeCode of localeCodes) {
    const nodes = filterNodesByLocale(data.allMdx.nodes, localeCode)
    nodesByLocale.set(localeCode, nodes)
  }

  return nodesByLocale
}
