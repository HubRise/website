import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Blog from '../layouts/blog'
import { convertBlogPostList } from '../components/utils/blog'

const BlogPage = ({ data }) => {
  console.log('Blog data: ', data)

  const postList = convertBlogPostList(data.allMdx.edges)

  console.log('post List', postList)
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
