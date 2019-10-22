import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { capitalize } from 'lodash'
import PropTypes from 'prop-types'

import Layout from './layout'
import SidebarRight from './sidebar_right'

const ApiPage = ({ data, path }) => {
  const { currentPage, relatedPages } = data
  const { frontmatter, body, fields } = data.currentPage

  return (
    <Layout>
      <div className='section__content'>
        <div className='documentation'>
          <h1>
            {frontmatter.title}
          </h1>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </div>
      </div>
      <SidebarRight
        logo={data.appLogo}
        currentPath={path}
        title={fields.appId && capitalize(fields.appId)}
        pages={[
          currentPage,
          ...relatedPages.nodes.map((node) => ({ ...node }))
        ]}
      />
    </Layout>
  )
}

export const apiPageQuery = graphql`
  query getApiPageContent(
    $id: String!,
    $relatedPagesFilter: MdxFilterInput!
    $appLogoRelativePath: StringQueryOperatorInput!
  ) {
    currentPage: mdx(id: { eq: $id }) {
      frontmatter {
        title
        position
      }
      headings {
        value
        depth
      }
      fields {
        slug
        appId
      }
      body
    }
    relatedPages: allMdx(filter: $relatedPagesFilter) {
      nodes {
        frontmatter {
          title
          position
        }
        fields {
          slug
        }
        headings {
          value
          depth
        }
      }
    }
    appLogo: file(relativePath: $appLogoRelativePath) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
          presentationWidth
        }
      }
    }
  }
`

ApiPage.propTypes = {
  data: PropTypes.exact({
    currentPage: PropTypes.exact({
      frontmatter: PropTypes.exact({
        title: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired
      }).isRequired,
      headings: PropTypes.arrayOf(
        PropTypes.shape({
          depth: PropTypes.number.isRequired,
          value: PropTypes.string.isRequired
        })
      ).isRequired,
      fields: PropTypes.exact({
        slug: PropTypes.string.isRequired,
        appId: PropTypes.string
      }).isRequired,
      body: PropTypes.string.isRequired
    }),
    relatedPages: PropTypes.exact({
      nodes: PropTypes.arrayOf(
        PropTypes.exact({
          frontmatter: PropTypes.exact({
            title: PropTypes.string.isRequired,
            position: PropTypes.number.isRequired
          }).isRequired,
          headings: PropTypes.arrayOf(
            PropTypes.shape({
              depth: PropTypes.number.isRequired,
              value: PropTypes.string.isRequired
            })
          ),
          fields: PropTypes.exact({
            slug: PropTypes.string.isRequired
          }).isRequired
        })
      )
    }),
    appLogo: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          childImageSharp: PropTypes.object.isRequired
        })
      )
    })
  }).isRequired
}

export default ApiPage
