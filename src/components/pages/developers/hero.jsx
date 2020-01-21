import React from 'react'
import PropTypes from 'prop-types'

import { useLayoutContext } from '../../../context/layout'

export const Hero = ({ title, description }) => {
  const { forms } = useLayoutContext()

  return (
    <section className="section">
      <div className="section__in section__in_padding">
        <h3 className="section__title">{title}</h3>
        <p className="section__description">
          {description.paragraph_1}
          <br />
          <button
            className="section__description-link section__description-link_black"
            onClick={forms.contact.toggle}
          >
            {description.paragraph_2.button}
          </button>
          {description.paragraph_2.text}
        </p>
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    paragraph_1: PropTypes.string.isRequired,
    paragraph_2: PropTypes.shape({
      button: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
