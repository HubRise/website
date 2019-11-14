import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Hero, Thumb } from '../components/pages/developers'
import { generateKey } from '../components/utils'

const DevelopersPage = ({ data }) => {
  const { content } = data.mdx.frontmatter

  return (
    <div className='index'>
      <Hero {...content.hero} />
      <section className='section'>
        <div className={`
          section__in
          section__in_padding
          section__in_reverse
        `}>
          <ul className='developers-thumbs'>
            {content.thumbs.map((props, idx) => (
              <Thumb
                key={generateKey(props.title, idx)}
                {...props}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export const developersPageQuery = graphql`
  query getDevelopersPageContent($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        content {
          hero {
            title
            description {
              paragraph_1
              paragraph_2 {
                button
                text
              }
            }
          }
          thumbs {
            title
            description
            to
            icon
          }
        }
      }
    }
  }
`

DevelopersPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        content: PropTypes.shape({
          hero: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.shape({
              paragraph_1: PropTypes.string.isRequired,
              paragraph_2: PropTypes.shape({
                button: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
              }).isRequired
            }).isRequired
          }).isRequired,
          thumbs: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              to: PropTypes.string.isRequired,
              icon: PropTypes.string.isRequired
            })
          ).isRequired
        }).isRequired
      }).isRequired
    })
  })
}

export default DevelopersPage
