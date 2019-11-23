import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../link'

export const Thumb = ({ to, icon, title, description }) => {
  return (
    <li className='developers-thumbs__item'>
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
  )
}

Thumb.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
