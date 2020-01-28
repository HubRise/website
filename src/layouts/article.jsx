import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Hero from '../components/blog/hero'
import Sidebar from '../components/blog/sidebar'
import { convertBlogPostList } from '../components/utils/blog'
import Post from '../components/blog/post'
import { Feedback } from '../components/documentation'

function Article({ data }) {
  const { t } = useTranslation()
  console.log('Article data', data)
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

  return (
    <div>
      <Hero
        title={'The HubRise Blog'}
        description={
          'Fresh news about new applications, API evolutions and real-word use of our platform'
        }
      />
      <MainContainer>
        <Inner>
          <Sidebar postList={postList} hideSearchInput />
          <Content>
            <Post {...currentPost} hideReadMoreLink />
            <div className="documentation">
              <MDXRenderer>{currentPost.body}</MDXRenderer>
            </div>
          </Content>
        </Inner>
      </MainContainer>
      <Feedback options={feedbackOptions} />
    </div>
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

const MainContainer = styled.section`
  margin: 75px auto;
  max-width: 1200px;
  width: 100%;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const Content = styled.div`
  flex: 1;
  padding: 75px 15px;
  background-color: #ffffff;
`

export default Article
