import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'

import Hero from '../components/blog/hero'
import Sidebar from '../components/blog/sidebar'
import Post from '../components/blog/post'
import { convertBlogPostList } from '../components/utils/blog'

function Blog({ data }) {
  const postList = convertBlogPostList(data.allMdx.edges)

  const [searchQuery, setSearchQuery] = useState('')

  const filteredPostList = postList.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  function handleQueryChange(newQuery) {
    setSearchQuery(newQuery)
    navigate(`/blog?q=${newQuery.trim()}`)
  }

  return (
    <div>
      <Hero
        title={'The HubRise Blog'}
        description={
          'Fresh news about new applications, API evolutions and real-word use of our platform'
        }
      />
      <section className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar
            postList={postList}
            searchQuery={searchQuery}
            onQueryChange={handleQueryChange}
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
    </div>
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
            description
            author
            date
          }
        }
      }
    }
  }
`

export default Blog
