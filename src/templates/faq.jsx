import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const FaqPage = ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <section className='section faq'>
      <div className='section__in section__in_padding section__in_reverse'>
        <h3 className='section__title section__title_align-left'>
          {frontmatter.title}
        </h3>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </section>
  )
}

export const faqPageQuery = graphql`
  query getFaqPageContent($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter { title }
      body
    }
  }
`

FaqPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired
      }),
      body: PropTypes.string.isRequired
    })
  })
}

export default FaqPage
