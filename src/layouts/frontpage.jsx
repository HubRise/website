import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
  Hero,
  Main,
  Demonstration,
  Faq,
  CompatibleApps,
  Philosophy
} from '../components/pages/frontpage'

export const FrontPage = ({ data }) => {
  const { mdx, images } = data
  const { content } = mdx.frontmatter

  return (
    <>
      <Hero
        signupForm={content.signup_form}
        {...content.hero}
      />
      <Main
        {...content.main}
        diagramImage={images.nodes.find(({ base }) => base === content.main.diagram)}
      />
      {content.demonstration && (
        <Demonstration
          videoFile={images.nodes.find(({ base }) => base === content.demonstration.video)}
          {...content.demonstration}
        />
      )}
      {content.faq && <Faq {...content.faq} />}
      {content.compatible_apps && (
        <CompatibleApps
          carouselImages={content.compatible_apps.carousel.reduce((result, item) => {
            const match = images.nodes.find(({ base }) => item.file === base)
            return result.concat(match ? { ...item, ...match } : [])
          }, [])}
          {...content.compatible_apps}
        />
      )}
      {content.philosophy && <Philosophy {...content.philosophy} />}
    </>
  )
}

export const frontPageQuery = graphql`
  query getFrontPageContent(
    $id: String!,
    $imagesFilter: FileFilterInput
  ) {
    mdx(id: { eq: $id }) {
      frontmatter {
        content {
          hero {
            title
            description
          }
          signup_form {
            title
            description
            button
          }
          main {
            title
            description
            features
            diagram
          }
          demonstration {
            title
            video
            unsupported
          }
          faq {
            title
            links {
              text
              to
            }
          }
          compatible_apps {
            title
            description
            carousel {
              file
              title
              description
            }
            screen_reader_pointer
          }
          philosophy {
            title
            description
          }
        }
      }
    }
    images: allFile(filter: $imagesFilter) {
      nodes { ...Image }
    }
  }
`

FrontPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        content: PropTypes.shape({
          hero: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
          }),
          signup_form: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            button: PropTypes.string.isRequired
          }).isRequired,
          main: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            features: PropTypes.arrayOf(PropTypes.string).isRequired,
            diagram: PropTypes.string.isRequired
          }).isRequired,
          demonstration: PropTypes.shape({
            title: PropTypes.string.isRequired,
            unsupported: PropTypes.string.isRequired,
            video: PropTypes.string.isRequired
          }),
          faq: PropTypes.shape({
            title: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
              })
            ).isRequired
          }),
          compatible_apps: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            carousel: PropTypes.arrayOf(
              PropTypes.shape({
                file: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
              })
            ).isRequired,
            screen_reader_pointer: PropTypes.string.isRequired
          }),
          philosophy: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
          })
        })
      })
    }),
    images: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          base: PropTypes.string.isRequired,
          childImageSharp: PropTypes.object
        })
      )
    })
  })
}

export default FrontPage
