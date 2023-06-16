import * as React from "react"
import { graphql } from "gatsby"

import MDXProvider from "@layouts/shared/components/MdxProvider"
import SEO, { Meta } from "@layouts/shared/components/Seo"
import Block from "@layouts/shared/components/Block"
import MDXCustomRenderer from "@layouts/shared/components/MdxCustomRenderer"

interface DocumentationSimpleProps {
  data: DocumentationSimpleData
  children: React.ReactNode
}

interface DocumentationSimpleData {
  mdx: DocumentationSimpleNode
}

interface DocumentationSimpleNode {
  frontmatter: {
    meta?: Meta
    title: string
  }
}

export const graphqlQuery = graphql`
  query simpleData($mdxNodeId: String!) {
    mdx(id: { eq: $mdxNodeId }) {
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

const DocumentationSimple = ({ data, children: body }: DocumentationSimpleProps): JSX.Element => {
  const { frontmatter } = data.mdx
  const { meta } = frontmatter

  return (
    <MDXProvider>
      <SEO meta={meta} />

      <Block backgroundColor="white" horizontalAlign="left">
        <MDXCustomRenderer title={frontmatter.title} body={body} />
      </Block>
    </MDXProvider>
  )
}

export default DocumentationSimple
