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

const applyPathOverride = (page) => {
  const { frontmatter, fields } = page

  if (frontmatter.pathOverride) {
    const slugParts = fields.slug.split(`/`).filter(Boolean)
    const slugWithoutPageName = slugParts.slice(0, slugParts.length - 1).join(`/`)
    const adjustedSlug = `/` + slugWithoutPageName + frontmatter.pathOverride

    return {
      ...page,
      fields: {
        ...fields,
        slug: adjustedSlug
      }
    }
  }

  return page
}

const DocPage = ({ data, path, pageContext }) => {
  const { chapterTitle } = pageContext
  const { currentAndSiblingPages, galleryImages, logo } = data
  const [ currentPage ] = currentAndSiblingPages.nodes
    .filter(({ id }) => id === data.currentPage.id)
  const { frontmatter, body, fields } = currentPage

  return (
    <Layout>
      <MainSection
        title={frontmatter.title}
        content={body}
      />
      <SectionNavigation
        logo={logo}
        currentPath={path}
        title={chapterTitle}
        pages={currentAndSiblingPages.nodes.map(applyPathOverride)}
      />
      {galleryImages.nodes.length > 1 && (
        <Gallery
          appName={fields.appId}
          images={galleryImages.nodes}
        />
      )}
      {frontmatter.info && <AppInfo content={frontmatter.info} />}
    </Layout>
  )
}

export const docPageQuery = graphql`
  fragment Image on File {
    name
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }

  query getDocPageContent(
    $id: String!,
    $currentAndSiblingPagesFilter: MdxFilterInput!
    $galleryImagesFilter: FileFilterInput,
    $logoRelativePath: StringQueryOperatorInput,
  ) {
    currentPage: mdx(id: { eq: $id }) { id }
    currentAndSiblingPages: allMdx(filter: $currentAndSiblingPagesFilter) {
      nodes {
        id
        frontmatter {
          title
          position
          pathOverride
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
    galleryImages: allFile(filter: $galleryImagesFilter) {
      nodes { ...Image }
    }
    logo: file(relativePath: $logoRelativePath) {
      ...Image
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
    galleryImages: PropTypes.shape({
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
