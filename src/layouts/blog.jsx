import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Hero from '../components/blog/hero'
import Sidebar from '../components/blog/sidebar'
import Post from '../components/blog/post'
import { convertArticleData, getArchiveTitle } from '../components/utils/blog'
import { Breadcrumbs } from '../components/documentation'

function Blog({ data, pageContext }) {
  const { t } = useTranslation()
  const { archive } = pageContext
  let postList = data.allMdx.edges
    .filter((edge) => edge.node.fields.contentLang === pageContext.lang)
    .map((articleEdge) => convertArticleData(articleEdge.node))

  /** Display only articles from selected archive */
  if (archive) {
    postList = postList.filter((post) =>
      archive.isCurrentYear
        ? archive.year === post.date.getFullYear() &&
          archive.month === post.date.getMonth()
        : archive.year === post.date.getFullYear()
    )
  }

  const [searchQuery, setSearchQuery] = useState('')

  const filteredPostList = postList.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  function handleQueryChange(newQuery) {
    setSearchQuery(newQuery)
    navigate(`${window.location.pathname}?q=${newQuery.trim()}`)
  }

  const breadcrumbs = archive
    ? [
        {
          id: 1,
          path: '/blog',
          label: 'Blog'
        },
        {
          id: 2,
          path: null,
          label: `${t('misc.archive')} - ${getArchiveTitle(archive, t)}`
        }
      ]
    : []

  return (
    <>
      {archive ? (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      ) : (
        <Hero
          title={'The HubRise Blog'}
          description={
            'Fresh news about new applications, API evolutions and real-word use of our platform'
          }
        />
      )}
      <section className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar
            postList={postList}
            searchQuery={searchQuery}
            onQueryChange={handleQueryChange}
            hideSearchInput={Boolean(archive)}
          />
          <div className="section__content">
            <ul className="articles">
              {filteredPostList.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export const blogPageQuery = graphql`
  query getArticleList {
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
            picture {
              childImageSharp {
                fixed(width: 260, height: 160) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
            shortDescription
            author
            date
          }
        }
      }
    }
  }
`

export default Blog
