import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Overview = ({ content, title }) => {
  return (
    <div className='section__content'>
      <div className='documentation'>
        <h1>
          {title}
        </h1>
        <MDXRenderer>
          {content}
        </MDXRenderer>
      </div>
    </div>
  )
}

export default Overview
