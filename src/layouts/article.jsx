import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, navigate } from 'gatsby'

import Sidebar from '../components/blog/sidebar'
import { convertArticleData } from '../components/utils/blog'
import Post from '../components/blog/post'
import { Breadcrumbs } from '../components/documentation'
import { ArticleFeedback } from '../components/blog/feedback'
import { getLocalizedUrl } from '../components/utils/link'

function Article({ data, pageContext }) {
  const article = convertArticleData(data.currentArticle)

  function handleQueryChange(newQuery) {
    let pathname = getLocalizedUrl('/blog', pageContext.lang)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  const breadcrumbs = [
    {
      id: 1,
      path: pageContext.config.base_path,
      label: pageContext.config.name
    },
    { id: 2, path: null, label: article.title }
  ]

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar onQueryChange={handleQueryChange} />
          <div className="section__content">
            <Post post={article} hideLinks />
            <div className="documentation">
              <MDXRenderer>{article.body}</MDXRenderer>
            </div>
          </div>
        </div>
      </div>
      <ArticleFeedback />
    </>
  )
}

export const articlePageQuery = graphql`
  query getArticlePageContent($id: String!) {
    currentArticle: mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      body
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
`

export default Article
