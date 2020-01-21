import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../link'
import { generateKey } from '../../utils'
import { useLayoutContext } from '../../../context/layout'

export const Specials = ({ items }) => {
  const { forms } = useLayoutContext()

  return (
    <>
      {items.map((item, idx) => (
        <p
          key={generateKey(item.paragraph_chunk_1, idx)}
          className="section__description"
        >
          <b>{item.paragraph_chunk_1}</b>
          {item.paragraph_chunk_2}
          {` `}
          {item.link && item.link.to ? (
            <Link
              className='section__description-link'
              to={item.link.to}
              newTab={false}
            >
              {item.link.text}
            </Link>
          ) : (
            <button
              className='section__description-link'
              data-open='contact-us'
              aria-controls='contact-us'
              aria-haspopup='true'
              tabIndex='0'
              onClick={forms.contact.toggle}
            >
              {item.button}
            </button>
          )}
        </p>
      ))}
    </>
  )
}

Specials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      paragraph_chunk_1: PropTypes.string.isRequired,
      paragraph_chunk_2: PropTypes.string.isRequired,
      link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
      }),
      button: PropTypes.string
    }).isRequired
  )
}
