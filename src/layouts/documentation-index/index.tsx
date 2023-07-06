import * as React from "react"
import { graphql } from "gatsby"

import Hero, { IHero } from "./Hero"

import SEO, { Meta } from "@layouts/shared/components/Seo"
import ThumbList from "@layouts/documentation-index/ThumbList"
import Block from "@layouts/shared/components/Block"

interface DocumentationIndexProps {
  data: DocumentationIndexData
}

interface DocumentationIndexData {
  mdx: DocumentationIndexNode
}

export interface IThumb {
  description: string
  icon: string
  title: string
  to: string
}

interface DocumentationIndexNode {
  frontmatter: {
    meta?: Meta
    content: {
      hero: IHero
      thumbs: Array<IThumb>
    }
  }
}

export const graphqlQuery = graphql`
  query developersData($mdxNodeId: String!) {
    mdx(id: { eq: $mdxNodeId }) {
      frontmatter {
        meta {
          title
          description
        }
        content {
          hero {
            description {
              paragraph_1
              paragraph_2 {
                button
                text
              }
            }
            title
          }
          thumbs {
            description
            icon
            title
            to
          }
        }
      }
    }
  }
`

const DocumentationIndex = ({ data }: DocumentationIndexProps): JSX.Element => {
  const { meta, content } = data.mdx.frontmatter

  return (
    <>
      <SEO meta={meta} />

      <Hero {...content.hero} />

      <Block backgroundColor="white">
        <ThumbList thumbs={content.thumbs} />
      </Block>
    </>
  )
}

export default DocumentationIndex
