import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'

import {
  SectionNavigation,
  Gallery,
  AppInfo
} from '../components/documentation'

const sortGalleryImages = (ordered, nodes) => {
  return ordered.reduce((reorderedNodes, base) => {
    return [...reorderedNodes, nodes.find((node) => node.base === base)]
  }, [])
}

const DocumentationPage = ({ data, path, pageContext }) => {
  const { name: chapterTitle } = pageContext
  const { currentAndSiblingPages, galleryImages, logo } = data
  const [ currentPage ] = currentAndSiblingPages.nodes
    .filter(({ id }) => id === data.currentPage.id)
  const { frontmatter, body } = currentPage

  return (
    <section className='section'>
      <div
        className={`
          section__in
          section__in_padding
          section__in_reverse
          section__in_developers
        `}
      >
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
        <SectionNavigation
          logo={logo}
          currentPath={path}
          title={chapterTitle}
          pages={currentAndSiblingPages.nodes}
        />
        {galleryImages.nodes.length > 1 && (
          <Gallery
            title={chapterTitle}
            images={sortGalleryImages(frontmatter.gallery, galleryImages.nodes)}
          />
        )}
        {frontmatter.app_info && <AppInfo content={frontmatter.app_info} />}
      </div>
    </section>
  )
}

export const documentationPageQuery = graphql`
  fragment Image on File {
    name
    base
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }

  query getDocumentationPageContent(
    $id: String!,
    $currentAndSiblingPagesFilter: MdxFilterInput!
    $galleryImagesFilter: FileFilterInput,
    $logoAbsolutePath: StringQueryOperatorInput,
  ) {
    currentPage: mdx(id: { eq: $id }) { id }
    currentAndSiblingPages: allMdx(filter: $currentAndSiblingPagesFilter) {
      nodes {
        id
        frontmatter {
          title
          position
          gallery
          path_override
          app_info {
            category
            availability
            price_range
            website
            contact
          }
        }
        fields {
          slug
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
    logo: file(absolutePath: $logoAbsolutePath) {
      ...Image
    }
  }
`

DocumentationPage.propTypes = {
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
            app_info: PropTypes.shape({
              category: PropTypes.string,
              availability: PropTypes.string,
              price_range: PropTypes.string,
              website: PropTypes.string,
              contact: PropTypes.string
            })
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
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

export default DocumentationPage
