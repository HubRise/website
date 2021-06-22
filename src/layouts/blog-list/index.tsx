import React, { useEffect, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

import SEO, { Meta } from '@components/Seo'
import MDXProvider from '@components/MdxProvider'
import Breadcrumbs, { Breadcrumb } from '@components/Breadcrumbs'
import { Hero, Post, Sidebar } from '@components/blog'
import { BlogListContext } from '@layouts/blog-list'
import { getArchiveTitle } from '@components/blog/Sidebar'
import { BlogNode } from '@components/blog/Post/interface'
import { sortMdxBlogNodesByDescendingDate } from './helpers'
import { getLocalizedUrl } from '@utils/locales'

interface BlogListProps {
  data: BlogListData
  pageContext: BlogListContext
}

interface BlogListData {
  allMdx: {
    nodes: Array<BlogNode>
  }
}

export const graphqlQuery = graphql`
  query blogListData {
    allMdx(filter: { slug: { regex: "/^blog//" } }) {
      nodes {
        fields {
          localeCode
          path
        }
        frontmatter {
          author
          date
          excerpt
          title
        }
      }
    }
  }
`

const BlogList = ({ data, pageContext }: BlogListProps): JSX.Element => {
  const { t } = useTranslation()
  const { archive } = pageContext

  const mdxNodesInLocale = data.allMdx.nodes.filter(
    (mdxNode) => mdxNode.fields.localeCode === pageContext.localeCode
  )

  /** Display only articles from selected archive, and order them by date. */
  let mdxNodes = sortMdxBlogNodesByDescendingDate(mdxNodesInLocale)
  if (archive) {
    mdxNodes = mdxNodes.filter((mdxNode) => {
      const postDate = new Date(mdxNode.frontmatter.date)
      return archive.isCurrentYear
        ? archive.year === postDate.getFullYear() &&
            archive.month === postDate.getMonth()
        : archive.year === postDate.getFullYear()
    })
  }

  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('q')) {
      setSearchQuery(searchParams.get('q') || '')
    }
  }, [])

  const filteredMdxNodes = mdxNodes.filter((node) =>
    node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  function handleQueryChange(newQuery) {
    setSearchQuery(newQuery)
    let pathname = getLocalizedUrl('/blog', pageContext.localeCode)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  let breadcrumbs: Array<Breadcrumb> = []
  if (archive) {
    breadcrumbs = [
      {
        path: pageContext.mainBlogPath,
        label: 'Blog'
      },
      {
        label: `${t('misc.archive')} - ${getArchiveTitle(archive, t)}`
      }
    ]
  }

  const meta: Meta = { title: 'HubRise Blog' }
  const hero = {
    title: 'The HubRise Blog',
    description:
      'New applications, evolutions of the API and real-world uses of HubRise'
  }

  return (
    <MDXProvider>
      <SEO localeCode={pageContext.localeCode} meta={meta} />

      {archive ? (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      ) : (
        <Hero title={hero.title} description={hero.description} />
      )}

      <section className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar
            searchQuery={searchQuery}
            onQueryChange={handleQueryChange}
          />
          <div className="section__content">
            {filteredMdxNodes.map((mdxNode, idx) => (
              <Post key={idx} mdxNode={mdxNode} showMore={true} />
            ))}
          </div>
        </div>
      </section>
    </MDXProvider>
  )
}

export default BlogList

export type { BlogListContext } from './interface'
