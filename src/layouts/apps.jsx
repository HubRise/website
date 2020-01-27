import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Modal from '../components/modal'
import SuggestAppForm from '../components/forms/suggest_app'
import { Hero, Developers, AppSection } from '../components/pages/apps'
import { generateKey, replaceBackslash } from '../components/utils'
import { useLayoutContext } from '../context/layout'

const AppsPage = ({ data }) => {
  const { content } = data.mdx.frontmatter
  const { forms } = useLayoutContext()
  const { t } = useTranslation()

  return (
    <>
      <Hero content={content.hero} />
      {content.sections.map((props, idx) => (
        <AppSection
          key={generateKey(props.title, idx)}
          logos={data.images.nodes.filter(
            ({ relativeDirectory }) =>
              replaceBackslash(relativeDirectory) === `general/images/app_logos`
          )}
          suggestAppContent={
            props.has_suggest_app && content.additional_sections.suggest_app
          }
          {...props}
        />
      ))}
      <Developers content={content.developers} />
      {forms.suggestApp.isVisible && (
        <Modal
          title={t(`forms.suggest_app.modal.title`)}
          description={t(`forms.suggest_app.modal.description`)}
          onClose={forms.suggestApp.toggle}
        >
          <SuggestAppForm />
        </Modal>
      )}
    </>
  )
}

export const appsPageQuery = graphql`
  query getAppsPageContent($id: String!, $imagesFilter: FileFilterInput!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        content {
          hero {
            title
            description {
              paragraph_1_text
              paragraph_1_link_text
              paragraph_2_text
              paragraph_2_link_text
              paragraph_2_link_to
            }
          }
          sections {
            title
            has_suggest_app
            apps {
              to
              logo
              title
              description
              additional_info
            }
          }
          additional_sections {
            suggest_app {
              title
              description
              button
            }
          }
          developers {
            title
            description {
              paragraph_1
              paragraph_2 {
                chunk_1
                chunk_2
              }
            }
          }
        }
      }
    }
    images: allFile(filter: $imagesFilter) {
      nodes {
        ...Image
      }
    }
  }
`

AppsPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        content: PropTypes.shape({
          hero: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.shape({
              paragraph_1_text: PropTypes.string.isRequired,
              paragraph_1_link_text: PropTypes.string.isRequired,
              paragraph_2_text: PropTypes.string.isRequired,
              paragraph_2_link_text: PropTypes.string.isRequired,
              paragraph_2_link_to: PropTypes.string.isRequired
            }).isRequired
          }).isRequired,
          sections: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              has_suggest_app: PropTypes.bool,
              apps: PropTypes.arrayOf(
                PropTypes.shape({
                  to: PropTypes.string.isRequired,
                  logo: PropTypes.string.isRequired,
                  title: PropTypes.string.isRequired,
                  description: PropTypes.string.isRequired,
                  additional_info: PropTypes.string
                })
              ).isRequired
            }).isRequired
          ).isRequired,
          additional_sections: PropTypes.shape({
            suggest_app: PropTypes.shape({
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              button: PropTypes.string.isRequired
            }).isRequired
          }).isRequired,
          developers: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.shape({
              paragraph_1: PropTypes.string.isRequired,
              paragraph_2: PropTypes.shape({
                chunk_1: PropTypes.string.isRequired,
                chunk_2: PropTypes.string.isRequired
              }).isRequired
            }).isRequired
          }).isRequired
        }).isRequired
      })
    }),
    images: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          relativeDirectory: PropTypes.string.isRequired,
          childImageSharp: PropTypes.object
        }).isRequired
      ).isRequired
    }).isRequired
  })
}

export default AppsPage
