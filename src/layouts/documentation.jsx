import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import {
  SectionNavigation,
  Gallery,
  AppInfo,
  Breadcrumbs
} from '../components/documentation'

const DocumentationPage = ({ data, path, pageContext }) => {
  const { name: chapterTitle, logo: logoBase } = pageContext.config
  const { currentAndSiblingPages, images } = data
  const [ currentPage ] = currentAndSiblingPages.nodes
    .filter(({ id }) => id === data.currentPage.id)
  const { frontmatter, body } = currentPage
  const { title, gallery, appInfo } = frontmatter

  return (
    <>
      <Breadcrumbs path={path} />
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
                {title}
              </h1>
              <MDXRenderer>
                {body}
              </MDXRenderer>
            </div>
          </div>
          <SectionNavigation
            logo={images.nodes.find(({ base }) => base === logoBase)}
            currentPath={path}
            title={chapterTitle}
            pages={currentAndSiblingPages.nodes}
          />
          {gallery && (
            <Gallery
              title={chapterTitle}
              images={gallery.reduce((result, base) => {
                const match = images.nodes.find((node) => node.base === base)
                return result.concat(match || [])
              }, [])}
            />
          )}
          {appInfo && <AppInfo content={appInfo} />}
        </div>
      </section>
    </>
  )
}

export const documentationPageQuery = graphql`
  query getDocumentationPageContent(
    $id: String!,
    $currentAndSiblingPagesFilter: MdxFilterInput!,
    $imagesFilter: FileFilterInput,
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
    images: allFile(filter: $imagesFilter) {
      nodes { ...Image }
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
    images: PropTypes.shape({
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
