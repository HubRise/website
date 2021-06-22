import * as React from 'react'
import { graphql, navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

import SEO from '@components/Seo'
import MDXProvider from '@components/MdxProvider'
import Breadcrumbs, { Breadcrumb } from '@components/Breadcrumbs'
import { Post, Sidebar } from '@components/blog'
import { BlogNode } from '@components/blog/Post/interface'
import { BlogPostContext } from './interface'
import { Meta } from '@components/Seo'
import { getLocalizedUrl } from '@utils/locales'

export interface BlogPostProps {
  data: BlogPostData
  pageContext: BlogPostContext
}

interface BlogPostData {
  mdxNode: BlogPostNode
}

interface BlogPostNode extends BlogNode {
  frontmatter: BlogNode['frontmatter'] & {
    body: string
    meta: Meta
  }
}

export const graphqlQuery = graphql`
  query blogPostData($mdxNodeId: String!) {
    mdxNode: mdx(id: { eq: $mdxNodeId }) {
      id
      fields {
        localeCode
        path
      }
      frontmatter {
        author
        date
        meta {
          title
          description
        }
        title
      }
      body
    }
  }
`

const BlogPost = ({ data, pageContext }: BlogPostProps): JSX.Element => {
  const mdxNode = data.mdxNode
  const { frontmatter } = mdxNode
  const { meta } = frontmatter
  const { t } = useTranslation()

  function handleQueryChange(newQuery: string): void {
    let pathname = getLocalizedUrl('/blog', pageContext.localeCode)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  const breadcrumbs: Array<Breadcrumb> = [
    {
      path: pageContext.mainBlogPath,
      label: t('blog.title')
    },
    { label: mdxNode.frontmatter.title }
  ]

  return (
    <MDXProvider>
      <SEO localeCode={pageContext.localeCode} meta={meta} />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar onQueryChange={handleQueryChange} />
          <div className="section__content">
            <Post showBody={true} mdxNode={mdxNode} />
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default BlogPost
