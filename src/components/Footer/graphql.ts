import { graphql, useStaticQuery } from 'gatsby'

import { IFooter } from './interface'

export interface FooterData {
  allFile: {
    nodes: Array<{
      absolutePath: string
      childYaml: {
        parsedContent: IFooter
      }
    }>
  }
}

export function useFooterData(): FooterData {
  return useStaticQuery<FooterData>(graphql`
    query footerData {
      allFile(filter: { base: { eq: "menu-footer.yaml" } }) {
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
