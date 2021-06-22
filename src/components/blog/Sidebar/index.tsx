import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useMedia } from 'react-use'
import { useTranslation } from 'react-i18next'

import { useSidebarData } from './graphql'
import {
  generateArchiveList,
  getArchiveTitle,
  getArchiveLink,
  getRecentArticles
} from './helpers'
import Link from '@components/Link'

interface SidebarProps {
  onQueryChange: (query: string) => void
  searchQuery?: string
  hideSearchInput?: boolean
}

const Sidebar = ({
  onQueryChange,
  searchQuery,
  hideSearchInput = false
}: SidebarProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const sidebarArticles = useSidebarData().filter(
    (sidebarArticle) => sidebarArticle.localeCode === i18n.language
  )

  const recentSidebarArticles = getRecentArticles(sidebarArticles)

  const archiveList = generateArchiveList(
    sidebarArticles.map((sidebarArticle) => new Date(sidebarArticle.date))
  )
  const isDesktop = useMedia('(min-width: 1024px)')
  const [query, setQuery] = useState(searchQuery || '')

  useEffect(() => {
    const updatedSearchQuery = searchQuery || ''
    if (query !== updatedSearchQuery) {
      setQuery(updatedSearchQuery)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  const [isRecentPostsExpanded, setRecentPostsExpanded] = useState(true)
  const [isArchiveExpanded, setArchiveExpanded] = useState(true)

  useEffect(() => {
    setRecentPostsExpanded(isDesktop)
    setArchiveExpanded(isDesktop)
  }, [isDesktop])

  function handleSearchSubmit(
    event: React.MouseEvent<HTMLElement> | React.FormEvent
  ): void {
    event.preventDefault()

    if (query.trim() !== searchQuery) {
      onQueryChange(query.trim())
    }
  }

  return (
    <aside className="section__sidebar blog-sidebar">
      {hideSearchInput ? null : (
        <form className="blog-sidebar__search" onSubmit={handleSearchSubmit}>
          <input
            className="blog-sidebar__search-input"
            type="text"
            placeholder={t('misc.search')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <i
            className="blog-sidebar__search-button fa fa-search"
            onClick={handleSearchSubmit}
          />
        </form>
      )}

      <div
        className={classNames(
          'blog-sidebar__menu',
          !isRecentPostsExpanded && 'blog-sidebar__menu_hidden'
        )}
      >
        <h5
          className="blog-sidebar__menu-title"
          onClick={() => !isDesktop && setRecentPostsExpanded((prev) => !prev)}
        >
          {t('misc.recent_posts')}
          <i
            className={classNames(
              'blog-sidebar__menu-arrow',
              isRecentPostsExpanded ? 'fa fa-angle-up' : 'fa fa-angle-down'
            )}
          />
        </h5>
        <ul className="blog-sidebar__menu-list">
          {recentSidebarArticles.map((sidebarArticle, idx) => (
            <li className="blog-sidebar__menu-item" key={idx}>
              <Link
                to={sidebarArticle.path}
                addLocalePrefix={false}
                activeClassName="active"
              >
                {sidebarArticle.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={classNames(
          'blog-sidebar__menu',
          !isArchiveExpanded && 'blog-sidebar__menu_hidden'
        )}
      >
        <h5
          className="blog-sidebar__menu-title"
          onClick={() => !isDesktop && setArchiveExpanded((prev) => !prev)}
        >
          {t('misc.archives')}
          <i
            className={classNames(
              'blog-sidebar__menu-arrow',
              isArchiveExpanded ? 'fa fa-angle-up' : 'fa fa-angle-down'
            )}
          />
        </h5>
        <ul className="blog-sidebar__menu-list">
          {archiveList.map((archiveInfo) => (
            <li
              className="blog-sidebar__menu-item"
              key={[archiveInfo.year, archiveInfo.month].join('_')}
            >
              <Link to={getArchiveLink(archiveInfo)} activeClassName="active">
                {getArchiveTitle(archiveInfo, t)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar

export { getArchiveTitle, generateArchiveList } from './helpers'
