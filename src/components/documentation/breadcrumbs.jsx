import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/link'
import { getPathSegments, generateKey } from '../../components/utils'

export const Breadcrumbs = ({ path }) => {
  const pathSegments = getPathSegments(path)
  let rebuiltPath = ``

  return (
    <section className='breadcrumbs-wrapper'>
      <ul className='breadcrumbs-wrapper__list'>
        {/*
          Dev section, which isn't part of the path,
          should come before API section (per provided design),
        */}
        {path.includes(`api`) && (
          <li className='breadcrumbs-wrapper__list-item'>
            <Link
              to='/developers'
              className='breadcrumbs-wrapper__list-item_link'
            >
              Developers
            </Link>
          </li>
        )}
        {pathSegments.map((segment, idx) => {
          rebuiltPath += `/${segment}`
          const segmentWithoutDashes = segment.replace(/-/g, ` `)

          return (
            <li
              key={generateKey(segment, idx)}
              className='breadcrumbs-wrapper__list-item'
            >
              {/* Last element in chain should't be a link */}
              {(idx === pathSegments.length - 1) ? (
                segmentWithoutDashes
              ) : (
                <Link
                  to={rebuiltPath.endsWith(`api`)
                    ? rebuiltPath + `/${pathSegments[idx + 1]}`
                    : rebuiltPath
                  }
                  className='breadcrumbs-wrapper__list-item_link'
                >
                  {segmentWithoutDashes === `api`
                    ? `API Reference`
                    : segmentWithoutDashes
                  }
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

Breadcrumbs.propTypes = {
  path: PropTypes.string.isRequired
}
