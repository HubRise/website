import React from 'react'
import PropTypes from 'prop-types'

export const Faq = ({ title, bullets }) => {
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
        section__in_green
        section__in_padding
      `}
      >
        <h3 className="section__title">{title}</h3>
        <ul className="index-faq">
          {bullets.map((text) => (
            <li className="index-faq__item-wrapper">
              <div className="index-faq__item">{text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired
}
