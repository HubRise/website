import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/link'

import { generateKey } from '../../components/utils'

const nav = [
  {
    to: `/developers/quick-start`,
    title: `Quick Start`
  },
  {
    to: `/api/general-concepts`,
    title: `API reference`
  },
  {
    to: `/developers/authentication`,
    title: `Authentication`
  },
  {
    to: `/developers/integration`,
    title: `Integration`
  }
]

const SidebarLeft = ({ currentPath }) => (
  <div className='section__sidebar section__sidebar_left section__sidebar_small-padding'>
    <div className='sidebar-nav' data-floater-float-me=''>
      <h5 className='sidebar-nav__title'>Developers</h5>
      <h5
        className='sidebar-nav__title sidebar-nav__title_small'
        id='sidebar-nav'
      >
        Developers
        <i className='fa fa-angle-down sidebar-nav__arrow' />
      </h5>
      <ul
        className='sidebar-nav__list sidebar-nav__list_hidden'
        id='sidebar-nav-list'
      >
        {nav.map(({ to, title }, idx) => {
          // Retain highlighting when navigating API section.
          const isHighlighted = currentPath.includes(to)

          return (
            <li key={generateKey(title, idx)} className='sidebar-nav__item'>
              <Link
                className={`sidebar-nav__link ${
                  isHighlighted ? 'sidebar-nav__link_active' : ''
                }`}
                to={to}
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

SidebarLeft.propTypes = {
  currentPath: PropTypes.string.isRequired
}

export default SidebarLeft
