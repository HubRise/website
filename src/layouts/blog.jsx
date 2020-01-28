import React, { useState } from 'react'
import styled from 'styled-components'

import Hero from '../components/blog/hero'
import Sidebar from '../components/blog/sidebar'
import Post from '../components/blog/post'

function Blog({ postList }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPostList = postList.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
          <Sidebar
            postList={postList}
            searchQuery={searchQuery}
            onQueryChange={(newQuery) => setSearchQuery(newQuery)}
          />
          <Content>
            <PostList>
              {filteredPostList.map((post) => (
                <PostItem key={post.id}>
                  <Post
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    url={post.url}
                    imageUrl={post.imageUrl}
                    shortDescription={post.shortDescription}
                  />
                </PostItem>
              ))}
            </PostList>
          </Content>
        </Inner>
      </MainContainer>
    </div>
  )
}

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

const PostList = styled.ul``

const PostItem = styled.li`
  display: block;
  width: 100%;
  margin-bottom: 32px;
`

export default Blog
