import React from 'react'
import PropTypes from 'prop-types'

export const Philosophy = ({ title, description }) => {
  return (
    <section className='section'>
      <div className='section__in section__in_padding'>
        <h3 className='section__title'>
          {title}
        </h3>
        {description}
      </div>
    </section>
  )
}

Philosophy.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
