import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../link'
import { generateKey } from '../../utils'

export const Faq = ({ title, links }) => {
  return (
    <section className={`
      section
      section_full-width
      section_padding
    `}>
      <div className={`
        section__in
        section__in_green
        section__in_padding
      `}>
        <h3 className='section__title'>
          {title}
        </h3>
        <ul className='index-faq'>
          {links.map(({ text, to }, idx) => (
            <li
              key={generateKey(text, idx)}
              className='index-faq__item'
            >
              <Link
                className='index-faq__link'
                to={to}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
