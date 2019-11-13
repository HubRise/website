import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { useLayoutContext } from '../context/layout'
import Link from '../components/link'
import { generateKey } from '../components/utils'

export const PricingPage = ({ data }) => {
  const { content } = data.mdx.frontmatter
  const { forms } = useLayoutContext()

  return (
    <section className='section section_white'>
      <div className='section__in section__in_padding'>
        <h3 className='section__title'>
          {content.hero.title}
        </h3>
        <div className='section section_full-width section_vw section_padding'>
          <div className='section__in section__in_green section__in_padding'>
            <h3 className='section__title section__title_no-border'>
              {content.offer.pricing.chunk_1}
              <span className='section__title-span'>
                {content.offer.pricing.chunk_2}
              </span>
            </h3>
            <ul className='section__price-list'>
              {content.offer.features.map((feature, idx) => (
                <li
                  key={generateKey(feature, idx)}
                  className='section__price-item'
                >
                  <span className='section__price-span'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              className='button button_white button_section'
              to={content.offer.button.to}
              newTab={false}
            >
              {content.offer.button.text}
            </Link>
          </div>
        </div>
        <p className='section__description section__description_large'>
          <b>{content.specials.free.chunk_1}</b>
          {content.specials.free.chunk_2}
          {` `}
          <Link
            className='section__description-link section__description-link_black'
            to={content.specials.free.link.to}
            newTab={false}
          >
            {content.specials.free.link.text}
          </Link>
        </p>
        <p className='section__description section__description_large'>
          <b>{content.specials.large_accounts.chunk_1}</b>
          {content.specials.large_accounts.chunk_2}
          {` `}
          <button
            className='section__description-link section__description-link_black'
            data-open='contact-us'
            aria-controls='contact-us'
            aria-haspopup='true'
            tabIndex='0'
            onClick={forms.contact.toggle}
          >
            {content.specials.large_accounts.button}
          </button>
        </p>
        {content.faq && (
          <div className='section__link-block'>
            <Link
              className={`
                section__description-link
                section__description-link_black
                section__description-link_bold
              `}
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
          hero {
            title
          }
          offer {
            pricing {
              chunk_1
              chunk_2
            }
            features
            button {
              text
              to
            }
          }
          specials {
            free {
              chunk_1
              chunk_2
              link {
                text
                to
              }
            }
            large_accounts {
              chunk_1
              chunk_2
              button
            }
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
            }),
            features: PropTypes.arrayOf(PropTypes.string).isRequired,
            button: PropTypes.shape({
              text: PropTypes.string.isRequired,
              to: PropTypes.string.isRequired
            })
          }).isRequired,
          specials: PropTypes.shape({
            free: PropTypes.shape({
              chunk_1: PropTypes.string.isRequired,
              chunk_2: PropTypes.string.isRequired,
              link: PropTypes.shape({
                text: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
              }).isRequired
            }).isRequired,
            large_accounts: PropTypes.shape({
              chunk_1: PropTypes.string.isRequired,
              chunk_2: PropTypes.string.isRequired,
              button: PropTypes.string.isRequired
            }).isRequired
          }),
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
