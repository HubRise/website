import React, { useState } from 'react'
import { navigate } from 'gatsby'

import Hero from '../components/blog/hero'
import Sidebar from '../components/blog/sidebar'
import Post from '../components/blog/post'

function Blog ({ postList }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPostList = postList.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  function handleQueryChange (newQuery) {
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
      <section className='section'>
        <div className='section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog'>
          <Sidebar
            postList={postList}
            searchQuery={searchQuery}
            onQueryChange={handleQueryChange}
          />
          <div className='section__content'>
            <ul className='articles'>
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

export default Blog
