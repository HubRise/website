import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/link'

export const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <section className="breadcrumbs-wrapper">
      <ul className="breadcrumbs-wrapper__list">
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id} className="breadcrumbs-wrapper__list-item">
            {breadcrumb.path ? (
              <Link
                to={breadcrumb.path}
                className="breadcrumbs-wrapper__list-item_link"
              >
                {breadcrumb.label}
              </Link>
            ) : (
              breadcrumb.label
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string,
      label: PropTypes.string.isRequired
    })
  ).isRequired
}
