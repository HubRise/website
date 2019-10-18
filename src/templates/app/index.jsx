import React from 'react'
import { graphql } from 'gatsby'
import { capitalize } from 'lodash'
import PropTypes from 'prop-types'

import Overview from './overview'
import Gallery from './gallery'
import Info from './info'
import Layout from '../api/layout'
import Breadcrumbs from '../api/breadcrumbs'
import SidebarRight from '../api/sidebar_right'

const AppPage = ({ data, path }) => {
  const { currentPage, relatedPages, appImages } = data
  const { frontmatter, body, fields } = currentPage

  return (
    <>
      <Breadcrumbs path={path} />
      <Layout>
        <Overview
          title={frontmatter.title}
          content={body}
        />
        <SidebarRight
          logo={appImages.nodes.find(({ name }) => name === `logo`)}
          currentPath={path}
          pages={[
            currentPage,
            ...relatedPages.nodes.map((node) => ({ ...node }))
          ]}
        />
        <Gallery
          appName={capitalize(fields.appId)}
          images={appImages.nodes.filter(({ name }) => name !== `logo`)}
        />
        <Info content={frontmatter.info} />
      </Layout>
    </>
  )
}

export const appPageQuery = graphql`
  query getAppPageContent(
    $id: String!,
    $appImagesFilter: FileFilterInput!,
    $relatedPagesFilter: MdxFilterInput!
  ) {
    currentPage: mdx(id: { eq: $id }) {
      frontmatter {
        position
        title
        info {
          category
          availability
          priceRange
          website
          contact
        }
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
          depth
          value
        }
      }
    }
    appImages: allFile(filter: $appImagesFilter) {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            presentationWidth
          }
        }
      }
    }
  }
`

AppPage.propTypes = {
  data: PropTypes.exact({
    currentPage: PropTypes.exact({
      frontmatter: PropTypes.shape({
        position: PropTypes.number,
        title: PropTypes.string,
        info: PropTypes.exact({
          category: PropTypes.string,
          availability: PropTypes.string,
          priceRange: PropTypes.string,
          website: PropTypes.string,
          contact: PropTypes.string
        })
      }).isRequired,
      headings: PropTypes.arrayOf(
        PropTypes.shape({
          depth: PropTypes.number,
          value: PropTypes.string
        }).isRequired
      ).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string,
        appId: PropTypes.string
      }).isRequired,
      body: PropTypes.string.isRequired
    }),
    appImages: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          childImageSharp: PropTypes.object
        }).isRequired
      )
    }),
    relatedPages: PropTypes.exact({
      nodes: PropTypes.arrayOf(
        PropTypes.exact({
          frontmatter: PropTypes.exact({
            title: PropTypes.string,
            position: PropTypes.number
          }).isRequired,
          headings: PropTypes.arrayOf(
            PropTypes.shape({
              depth: PropTypes.number,
              value: PropTypes.string
            }).isRequired
          ),
          fields: PropTypes.exact({
            slug: PropTypes.string
          }).isRequired
        })
      )
    })
  }).isRequired
}

export default AppPage
