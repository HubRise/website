import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../link'
import { useLayoutContext } from '../../../context/layout'

export const Hero = ({ content }) => {
  const { forms } = useLayoutContext()

  return (
    <section className='section'>
      <div className='section__in section__in_padding'>
        <h3 className='section__title'>
          {content.title}
        </h3>
        <div className='section__description'>
          <p>
            {content.description.paragraph_1_text}
            {` `}
            <button
              className='section__description-link'
              data-open='contact-us'
              aria-controls='contact-us'
              aria-haspopup='true'
              tabIndex='0'
              onClick={forms.contact.toggle}
            >
              {content.description.paragraph_1_link_text}
            </button>
          </p>
          <p>
            {content.description.paragraph_2_text}
            {` `}
            <Link
              className='section__description-link'
              to={content.description.paragraph_2_link_to}
            >
              {content.description.paragraph_2_link_text}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      paragraph_1_text: PropTypes.string.isRequired,
      paragraph_1_link_text: PropTypes.string.isRequired,
      paragraph_2_text: PropTypes.string.isRequired,
      paragraph_2_link_text: PropTypes.string.isRequired,
      paragraph_2_link_to: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
