import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import { useMedia } from 'react-use'

function getRecentPosts(postList) {
  return [...postList].sort((a, b) => b.date - a.date).slice(0, 5)
}

const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function getArchiveList(postList) {
  const sortedPostList = [...postList].sort((a, b) => b.date - a.date)
  const archiveSet = new Set()

  sortedPostList.forEach((post) => {
    const archiveCell =
      post.date.getFullYear() === new Date().getFullYear()
        ? `${monthList[post.date.getMonth()]} ${post.date.getFullYear()}`
        : post.date.getFullYear().toString()

    if (!archiveSet.has(archiveCell)) {
      archiveSet.add(archiveCell)
    }
  })

  return Array.from(archiveSet.values())
}

function Sidebar({ postList, searchQuery, onQueryChange, hideSearchInput }) {
  const isDesktop = useMedia('(min-width: 1024px)')
  const [query, setQuery] = useState(searchQuery || '')
  const recentPosts = getRecentPosts(postList)

  const [isRecentPostsExpanded, setRecentPostsExpanded] = useState(true)
  const [isArchiveExpanded, setArchiveExpanded] = useState(true)

  useEffect(() => {
    setRecentPostsExpanded(isDesktop)
    setArchiveExpanded(isDesktop)
  }, [isDesktop])

  function handleSearchSubmit(event) {
    event.preventDefault()

    if (query.trim() !== searchQuery) {
      onQueryChange(query.trim())
    }
  }

  const archiveList = getArchiveList(postList)
  return (
    <aside className="section__sidebar">
      {hideSearchInput ? null : (
        <form className="widget_search" onSubmit={handleSearchSubmit}>
          <input
            className="widget_search__input-search"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <i className="widget_search__search-submit fa fa-search" />
        </form>
      )}

      <div
        className={cx(
          'blog_widget',
          !isRecentPostsExpanded && 'blog_widget__hidden'
        )}
      >
        <h5
          className="blog_widget__title"
          onClick={() => !isDesktop && setRecentPostsExpanded((prev) => !prev)}
        >
          Recent Posts
          <i
            className={cx(
              'fa',
              'blog_widget__arrow',
              isRecentPostsExpanded ? 'fa-angle-up' : 'fa-angle-down'
            )}
          />
        </h5>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={post.url}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cx(
          'blog_widget',
          !isArchiveExpanded && 'blog_widget__hidden'
        )}
      >
        <h5
          className="blog_widget__title"
          onClick={() => !isDesktop && setArchiveExpanded((prev) => !prev)}
        >
          Archives
          <i
            className={cx(
              'fa',
              'blog_widget__arrow',
              isArchiveExpanded ? 'fa-angle-up' : 'fa-angle-down'
            )}
          />
        </h5>
        <ul>
          {archiveList.map((archiveName) => (
            <li>
              <Link to={'/blog'}>{archiveName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
