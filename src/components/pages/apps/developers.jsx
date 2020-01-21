import React from 'react'
import PropTypes from 'prop-types'

export const Developers = ({ content }) => {
  const { title, description } = content

  return (
    <section
      className={`
      section
      section_full-width
      section_padding
    `}
    >
      <div
        className={`
        section__in
        section__in
        section__in_green
        section__in_padding
      `}
      >
        <h3 className="section__title section__title_white">{title}</h3>
        <p className="section__description_white">{description.paragraph_1}</p>
        <p className="section__description_white">
          {description.paragraph_2.chunk_1}
          <br />
          {description.paragraph_2.chunk_2}
        </p>
      </div>
    </section>
  )
}

Developers.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      paragraph_1: PropTypes.string.isRequired,
      paragraph_2: PropTypes.shape({
        chunk_1: PropTypes.string.isRequired,
        chunk_2: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}
