import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO, { Meta } from "@components/Seo"

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
    <>
      <SEO meta={meta} />

      <section className="section faq">
        <div className="section__in section__in_padding section__in_reverse">
          <h3 className="section__title section__title_align-left">{frontmatter.title}</h3>

          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </>
  )
}

export default DocumentationSimple
