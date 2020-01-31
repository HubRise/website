import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Sidebar from '../components/blog/sidebar'
import { convertBlogPostList } from '../components/utils/blog'
import Post from '../components/blog/post'
import { Breadcrumbs } from '../components/documentation'
import { ArticleFeedback } from '../components/blog/feedback'

function Article({ data, pageContext }) {
  const { t } = useTranslation()
  const postList = convertBlogPostList(data.articleList.edges)

  const currentPost = postList.find((post) => post.id === data.currentPost.id)
  const feedbackOptions = [
    {
      title: t('misc.feedback.options.send_email'),
      url: 'mailto:support@hubrise.com'
    },
    {
      title: t('misc.feedback.options.edit_page'),
      url: `https://github.com/HubRise/website`
    }
  ]

  const breadcrumbs = [
    {
      id: 1,
      path: pageContext.config.base_path,
      label: pageContext.config.name
    },
    { id: 2, path: null, label: currentPost.title }
  ]

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar postList={postList} hideSearchInput />
          <div className="section__content">
            <Post post={currentPost} hideLinks />
            <div className="documentation">
              <MDXRenderer>{currentPost.body}</MDXRenderer>
            </div>
          </div>
        </div>
      </div>
      <ArticleFeedback options={feedbackOptions} />
    </>
  )
}

export const articlePageQuery = graphql`
  query getArticlePageContent($id: String!) {
    currentPost: mdx(id: { eq: $id }) {
      id
    }
    articleList: allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
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

export default Article
