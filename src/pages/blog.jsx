import React from 'react'
import { graphql } from 'gatsby'

import Blog from '../layouts/blog'
import { convertBlogPostList } from '../components/utils/blog'

const BlogPage = ({ data }) => {
  const postList = convertBlogPostList(data.allMdx.edges)
  return <Blog postList={postList} />
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
          body
          frontmatter {
            title
            picture {
              publicURL
            }
            layout
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

export default BlogPage
