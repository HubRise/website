import { graphql, useStaticQuery } from 'gatsby'

import { IHeaderLink } from './helpers'

export interface HeaderData {
  allFile: {
    nodes: Array<{
      absolutePath: string
      childYaml: {
        parsedContent: Array<IHeaderLink>
      }
    }>
  }
}

export function useHeaderData(): HeaderData {
  return useStaticQuery<HeaderData>(graphql`
    query useHeaderData {
      allFile(filter: { base: { eq: "menu-header.yaml" } }) {
        nodes {
          absolutePath
          childYaml {
            parsedContent
          }
        }
      }
    }
  `)
}
