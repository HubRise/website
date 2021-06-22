import * as React from 'react'
import { useScrollRestoration } from 'gatsby'
import classNames from 'classnames'

import { ICategory } from '../interface'
import Link from '@components/Link'

interface NavProps {
  categories: Array<ICategory>
  currentPath: string
  allAppsPath: string
  allAppsLabel: string
}

const Nav = ({
  categories,
  currentPath,
  allAppsPath,
  allAppsLabel
}: NavProps): JSX.Element => {
  const ulScrollRestoration = useScrollRestoration('apps-nav')

  // Remove when https://github.com/gatsbyjs/gatsby/pull/27982 is merged
  const ulScrollRestorationPatchedType = ulScrollRestoration as {
    ref: React.MutableRefObject<HTMLUListElement | null>
    onScroll(): void
  }

  return (
    <div className="apps-nav">
      <ul className="apps-nav__list" {...ulScrollRestorationPatchedType}>
        <li className="apps-nav__item" key={-1}>
          <Link
            to={allAppsPath}
            addLocalePrefix={false}
            className={classNames(
              'apps-nav__link',
              allAppsPath === currentPath && 'apps-nav__link_active'
            )}
          >
            {allAppsLabel}
          </Link>
        </li>
        {categories.map((category, idx) => {
          return (
            <li className="apps-nav__item" key={idx}>
              <Link
                to={category.path}
                addLocalePrefix={false}
                className={classNames(
                  'apps-nav__link',
                  category.path === currentPath && 'apps-nav__link_active'
                )}
              >
                {category.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
