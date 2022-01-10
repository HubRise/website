import { graphql, useStaticQuery } from "gatsby"

export interface SiteMetadata {
  contactMessageUrl: string
  description: string
  recaptchaSiteKey: string
  title: string
}

interface LayoutContextData {
  site: {
    siteMetadata: SiteMetadata
  }
}

export function useLayoutContextData(): LayoutContextData {
  return useStaticQuery<LayoutContextData>(graphql`
    query layoutContextData {
      site {
        siteMetadata {
          contactMessageUrl
          description
          recaptchaSiteKey
          title
        }
      }
    }
  `)
}
