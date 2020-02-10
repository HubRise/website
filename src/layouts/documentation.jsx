import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useTranslation } from 'react-i18next'

import {
  SectionNavigation,
  Gallery,
  AppInfo,
  Breadcrumbs,
  Feedback
} from '../components/documentation'

const DocumentationPage = ({ data, path, pageContext }) => {
  const { i18n, t } = useTranslation()
  const { name: chapterTitle, logo: logoBase } = pageContext.config
  const { images } = data

  const pageNodes = data.currentAndSiblingPages.nodes
  const currentPageId = data.currentPage.id
  const firstPage = pageNodes.find((node) => node.frontmatter.position === 1)
  const currentPage = pageNodes.find((node) => node.id === currentPageId)

  const { frontmatter, body } = currentPage
  const { title, gallery, app_info, extension_info } = frontmatter

  function getBreadcrumbs() {
    const rootLink =
      i18n.language === 'fr'
        ? { title: 'Développeurs', to: '/developpeurs' }
        : { to: '/developers', title: 'Developers' }

    return [
      { id: 1, path: rootLink.to, label: rootLink.title },
      pageContext.config.base_path === '/api'
        ? { id: 2, path: firstPage.fields.slug, label: chapterTitle }
        : null,
      { id: 3, path: null, label: currentPage.frontmatter.title }
    ].filter(Boolean)
  }

  const feedbackOptions = [
    {
      title: t('misc.feedback.documentation.options.send_email'),
      url: 'mailto:support@hubrise.com'
    },
    {
      title: t('misc.feedback.documentation.options.edit_page'),
      url: `https://github.com/HubRise/website/edit/master${pageContext.relativePath}`
    }
  ]

  const breadcrumbs = getBreadcrumbs()

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <section className="section">
        <div
          className={`
          section__in
          section__in_padding
          section__in_reverse
          section__in_developers
        `}
        >
          <div className="section__content">
            <div className="documentation">
              <h1>{title}</h1>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
          <SectionNavigation
            logo={images.nodes.find(({ base }) => base === logoBase)}
            currentPath={path}
            title={currentPage.frontmatter.title}
            pages={pageNodes}
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
          {app_info && <AppInfo content={app_info} />}
          {extension_info && <AppInfo content={extension_info} />}
        </div>
      </section>
      <Feedback options={feedbackOptions} />
    </>
  )
}

export const documentationPageQuery = graphql`
  query getDocumentationPageContent(
    $id: String!
    $currentAndSiblingPagesFilter: MdxFilterInput!
    $imagesFilter: FileFilterInput
  ) {
    currentPage: mdx(id: { eq: $id }) {
      id
    }
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
          extension_info {
            current_version
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
      nodes {
        ...Image
      }
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
            }),
            extension_info: PropTypes.shape({
              current_version: PropTypes.string
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
