import React from 'react'
import PropTypes from 'prop-types'

export const Philosophy = ({ title, description }) => {
  return (
    <section className="section">
      <div className="section__in section__in_padding">
        <h3 className="section__title">{title}</h3>
        <p className="section__description section__description_black">
          {description.paragraph_1}
        </p>
        <p className="section__description">{description.paragraph_2}</p>
      </div>
    </section>
  )
}

Philosophy.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    paragraph_1: PropTypes.string.isRequired,
    paragraph_2: PropTypes.string.isRequired
  }).isRequired
}
