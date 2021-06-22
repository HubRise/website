import * as React from 'react'
import { graphql } from 'gatsby'

import { generateKey } from '@utils/misc'
import SEO, { Meta } from '@components/Seo'
import Hero, { IHero } from './components/Hero'
import Thumb from './components/Thumb'
import { DocumentationIndexContext } from './interface'

interface DocumentationIndexProps {
  data: DocumentationIndexData
  pageContext: DocumentationIndexContext
}

interface DocumentationIndexData {
  mdx: DocumentationIndexNode
}

interface DocumentationIndexNode {
  frontmatter: {
    meta?: Meta
    content: {
      hero: IHero
      thumbs: Array<{
        description: string
        icon: string
        title: string
        to: string
      }>
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

const DocumentationIndex = ({
  data,
  pageContext
}: DocumentationIndexProps): JSX.Element => {
  const { meta, content } = data.mdx.frontmatter

  return (
    <>
      <SEO localeCode={pageContext.localeCode} meta={meta} />

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
            <ul className="developers-thumbs">
              {content.thumbs.map((thumb, idx) => (
                <Thumb key={generateKey(thumb.title, idx)} {...thumb} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default DocumentationIndex
