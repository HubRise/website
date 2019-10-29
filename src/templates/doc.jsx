import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import {
  Layout,
  MainSection,
  SectionNavigation,
  Gallery,
  AppInfo
} from '../components/documentation'

const DocPage = ({ data, path }) => {
  const { currentAndSiblingPages, appImages } = data
  const [ currentPage ] = currentAndSiblingPages.nodes
    .filter(({ id }) => id === data.currentPage.id)
  const { frontmatter, body, fields } = currentPage
  const [ appLogo ] = appImages.nodes
    .filter(({ name }) => name === `logo`)

  return (
    <Layout>
      <MainSection
        title={frontmatter.title}
        content={body}
      />
      <SectionNavigation
        logo={appLogo}
        currentPath={path}
        title={fields.appId}
        pages={currentAndSiblingPages}
      />
      {frontmatter.info && appImages.nodes.length > 1 && (
        <>
          <Gallery
            appName={fields.appId}
            images={appImages.nodes.filter(({ name }) => name !== `logo`)}
          />
          <AppInfo content={frontmatter.info} />
        </>
      )}
    </Layout>
  )
}

export const docPageQuery = graphql`
  query getDocPageContent(
    $id: String!,
    $currentAndSiblingPagesFilter: MdxFilterInput!
    $appImagesFilter: FileFilterInput,
  ) {
    currentPage: mdx(id: { eq: $id }) { id }
    currentAndSiblingPages: allMdx(filter: $currentAndSiblingPagesFilter) {
      nodes {
        id
        frontmatter {
          title
          position
          info {
            category
            availability
            price_range
            website
            contact
          }
        }
        fields {
          slug
          appId
        }
        headings {
          value
          depth
        }
        body
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

DocPage.propTypes = {
  data: PropTypes.shape({
    currentPage: PropTypes.exact({
      id: PropTypes.string.isRequired
    }),
    currentAndSiblingPages: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            position: PropTypes.number.isRequired,
            info: PropTypes.shape({
              category: PropTypes.string,
              availability: PropTypes.string,
              price_range: PropTypes.string,
              website: PropTypes.string,
              contact: PropTypes.string
            })
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
            appId: PropTypes.string
          }),
          headings: PropTypes.arrayOf(
            PropTypes.shape({
              depth: PropTypes.number.isRequired,
              value: PropTypes.string.isRequired
            })
          ),
          body: PropTypes.string.isRequired
        })
      )
    }),
    appImages: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          childImageSharp: PropTypes.object.isRequired
        })
      )
    })
  })
}

export default DocPage
