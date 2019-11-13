import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { useLayoutContext } from '../context/layout'
import Link from '../components/link'
import { generateKey } from '../components/utils'

export const DevelopersPage = ({ data }) => {
  const { content } = data.mdx.frontmatter
  const { forms } = useLayoutContext()

  return (
    <div className='index'>
      <section className='section'>
        <div className='section__in section__in_padding'>
          <h3 className='section__title'>
            {content.hero.title}
          </h3>
          <p className='section__description'>
            {content.hero.description.paragraph_1}
            <br />
            <button
              className='section__description-link section__description-link_black'
              onClick={forms.contact.toggle}
            >
              {content.hero.description.paragraph_2.button}
            </button>
            {content.hero.description.paragraph_2.text}
          </p>
        </div>
      </section>
      <section className='section'>
        <div className={`
          section__in
          section__in_padding
          section__in_reverse
        `}>
          <ul className='developers-thumbs'>
            {content.thumbs.map(({ title, description, icon, to }, idx) => (
              <li
                key={generateKey(title, idx)}
                className='developers-thumbs__item'
              >
                <Link
                  className='developers-thumbs__link'
                  to={to}
                >
                  <i className={`developers-thumbs__icon fa ${icon}`} />
                  <span className='developers-thumbs__title'>
                    {title}
                  </span>
                  <p className='developers-thumbs__description'>
                    {description}
                  </p>
                </Link>
              </li>
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
              })
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
