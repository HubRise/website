import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Offer, Specials } from '../components/pages/pricing'
import Link from '../components/link'

const PricingPage = ({ data }) => {
  const { content } = data.mdx.frontmatter

  return (
    <section className='section section_white'>
      <div className='section__in section__in_padding'>
        <h3 className='section__title'>
          {content.hero.title}
        </h3>
        <Offer {...content.offer} />
        <Specials items={content.specials} />
        {content.faq && (
          <div className='section__link-block'>
            <Link
              className="section__description-link"
              to={content.faq.to}
            >
              {content.faq.text}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export const pricingPageQuery = graphql`
  query getPricingPageContent($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        content {
          hero { title }
          offer {
            pricing {
              chunk_1
              chunk_2
            }
            features
            link {
              text
              to
            }
          }
          specials {
            paragraph_chunk_1
            paragraph_chunk_2
            link {
              text
              to
            }
            button
          }
          faq {
            text
            to
          }
        }
      }
    }
  }
`

PricingPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        content: PropTypes.shape({
          hero: PropTypes.shape({
            title: PropTypes.string.isRequired
          }).isRequired,
          offer: PropTypes.shape({
            pricing: PropTypes.shape({
              chunk_1: PropTypes.string.isRequired,
              chunk_2: PropTypes.string.isRequired
            }).isRequired,
            features: PropTypes.arrayOf(PropTypes.string).isRequired,
            link: PropTypes.shape({
              text: PropTypes.string.isRequired,
              to: PropTypes.string.isRequired
            }).isRequired
          }).isRequired,
          specials: PropTypes.arrayOf(
            PropTypes.shape({
              paragraph_chunk_1: PropTypes.string.isRequired,
              paragraph_chunk_2: PropTypes.string.isRequired,
              link: PropTypes.shape({
                text: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
              }),
              button: PropTypes.string
            }).isRequired
          ),
          faq: PropTypes.shape({
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
          })
        }).isRequired
      })
    })
  })
}

export default PricingPage
