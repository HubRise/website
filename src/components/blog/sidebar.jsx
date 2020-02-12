import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import cx from 'classnames'
import { useMedia } from 'react-use'
import { useTranslation } from 'react-i18next'

import {
  generateArchiveList,
  getArchiveLink,
  getArchiveTitle
} from '../utils/blog'
import Link from '../link'

function getRecentPosts(articleEdges) {
  return articleEdges
    .map((edge) => {
      const { frontmatter, id, fields } = edge.node
      return {
        id,
        title: frontmatter.title,
        date: new Date(frontmatter.date),
        url: fields.slug
      }
    })
    .sort((a, b) => b.date - a.date)
    .slice(0, 5)
}

function Sidebar({ searchQuery, onQueryChange, hideSearchInput }) {
  const { t, i18n } = useTranslation()
  const {
    allMdx: { edges: articleEdges }
  } = useStaticQuery(blogSidebarQuery)

  const filteredArticleEdges = articleEdges.filter(
    (edge) => edge.node.fields.contentLang === i18n.language
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

  function handleSearchSubmit(event) {
    event.preventDefault()

    if (query.trim() !== searchQuery) {
      onQueryChange(query.trim())
    }
  }

  const recentPosts = getRecentPosts(filteredArticleEdges)

  const archiveList = generateArchiveList(
    filteredArticleEdges.map((edge) => new Date(edge.node.frontmatter.date))
  )

  return (
    <aside className="section__sidebar">
      {hideSearchInput ? null : (
        <form className="widget_search" onSubmit={handleSearchSubmit}>
          <input
            className="widget_search__input-search"
            type="text"
            placeholder={t('misc.search')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <i
            className="widget_search__search-submit fa fa-search"
            onClick={handleSearchSubmit}
          />
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
          {t('misc.recent_posts')}
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
              <Link to={post.url} activeClassName="active">
                {post.title}
              </Link>
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
          {t('misc.archives')}
          <i
            className={cx(
              'fa',
              'blog_widget__arrow',
              isArchiveExpanded ? 'fa-angle-up' : 'fa-angle-down'
            )}
          />
        </h5>
        <ul>
          {archiveList.map((archiveInfo) => (
            <li key={[archiveInfo.year, archiveInfo.month].join('_')}>
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

const blogSidebarQuery = graphql`
  query getSidebarData {
    allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
      edges {
        node {
          id
          fields {
            slug
            contentLang
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default Sidebar
