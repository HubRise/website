import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { NonStretchedImage } from '../../components/image'
import Link from '../../components/link'
import { generateKey, createHeaderAnchor } from '../../components/utils'

const sortPagesAsc = (pages) => {
  return pages.sort((page1, page2) => {
    const position1 = page1.frontmatter.position
    const position2 = page2.frontmatter.position

    return position1 - position2
  })
}

export const SectionNavigation = ({ currentPath, pages, title, logo }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`
        section__sidebar
        section__sidebar_right
        section__sidebar_small-padding
        ${logo ? 'section__sidebar_sticky' : ''}
      `}
    >
      {logo && (
        <div className='section__sidebar_logo'>
          <NonStretchedImage
            alt={logo.name}
            {...logo.childImageSharp}
          />
        </div>
      )}
      <div
        className={`
          section__sidebar-in
          ${logo ? '' : 'section__sidebar_sticky'}
        `}
      >
        <h5 className='content-nav__title'>
          {title || `Content`}
        </h5>
        <h5
          id='content-nav'
          className={`
            content-nav__title
            content-nav__title_small
            ${isExpanded ? 'content-nav__title_small_bottom_border' : ''}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {title || `Content`}
          <i
            className={`
              fa
              fa-angle-${isExpanded ? 'up' : 'down'}
              content-nav__arrow
            `}
          />
        </h5>
        <ul
          id='content-nav-list'
          className={`
            content-nav__list
            ${isExpanded ? '' : 'content-nav__list_hidden'}
          `}
        >
          {sortPagesAsc(pages)
            .map(({ frontmatter, fields, headings }, idx) => {
              const { slug } = fields
              const isCurrentPage = currentPath.endsWith(slug)

              return (
                <li
                  key={generateKey(frontmatter.title, idx)}
                  className={`content-nav__item ${
                    isCurrentPage ? 'content-nav__item_active' : ''
                  }`}
                >
                  <Link to={slug} className='content-nav__link'>
                    {frontmatter.title}
                  </Link>
                  {isCurrentPage && (headings.length !== 0) && (
                    <ol className='content-sublist'>
                      {headings
                        .filter(({ depth }) => depth === 2)
                        .map(({ value: headingText }, idx) => {
                          return (
                            <li
                              key={generateKey(headingText, idx)}
                              className='content-sublist-item content-sublist-level-2'
                            >
                              <Link
                                className='content-sublist-link'
                                to={`#${createHeaderAnchor(headingText)}`}
                              >
                                <span className='content-sublist-text'>
                                  {headingText}
                                </span>
                              </Link>
                            </li>
                          )
                        })}
                    </ol>
                  )}
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

SectionNavigation.propTypes = {
  currentPath: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired
      }),
      headings: PropTypes.arrayOf(
        PropTypes.shape({
          depth: PropTypes.number.isRequired,
          value: PropTypes.string.isRequired
        })
      )
    })
  )
}
