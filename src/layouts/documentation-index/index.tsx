import * as React from "react"
import { graphql } from "gatsby"

import Hero, { IHero } from "./Hero"

import SEO, { Meta } from "@layouts/shared/components/Seo"
import ThumbList from "@layouts/documentation-index/ThumbList"

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
  query developersData($mdXNodeId: String!) {
    mdx(id: { eq: $mdXNodeId }) {
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

      <div className="index">
        <Hero {...content.hero} />

        <section className="section">
          <div
            className={`
            section__in
            section__in_padding
            section__in_reverse
          `}
          >
            <ThumbList thumbs={content.thumbs} />
          </div>
        </section>
      </div>
    </>
  )
}

export default DocumentationIndex
