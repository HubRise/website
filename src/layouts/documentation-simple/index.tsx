import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { StyledMDX } from "./Styles"

import MDXProvider from "@layouts/shared/components/MdxProvider"
import SEO, { Meta } from "@layouts/shared/components/Seo"

interface DocumentationSimpleProps {
  data: DocumentationSimpleData
}

interface DocumentationSimpleData {
  mdx: DocumentationSimpleNode
}

interface DocumentationSimpleNode {
  body: string
  frontmatter: {
    meta?: Meta
    title: string
  }
}

export const graphqlQuery = graphql`
  query simpleData($mdXNodeId: String!) {
    mdx(id: { eq: $mdXNodeId }) {
      body
      frontmatter {
        title
        meta {
          title
          description
        }
      }
    }
  }
`

const DocumentationSimple = ({ data }: DocumentationSimpleProps): JSX.Element => {
  const { frontmatter, body } = data.mdx
  const { meta } = frontmatter

  return (
    <MDXProvider>
      <SEO meta={meta} />

      <div className="section">
        <div className="section__in section__in_padding section__in_reverse">
          <h3 className="section__title section__title_align-left">{frontmatter.title}</h3>

          <StyledMDX>
            <MDXRenderer>{body}</MDXRenderer>
          </StyledMDX>
        </div>
      </div>
    </MDXProvider>
  )
}

export default DocumentationSimple
