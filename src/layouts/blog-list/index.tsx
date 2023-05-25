import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"
import { useTranslation } from "react-i18next"

import { sortMdxBlogNodesByDescendingDate } from "./helpers"
import { BlogListContext } from "./interface"

import { getLocalizedUrl, useLocaleCode } from "@utils/locales"
import SEO, { Meta } from "@layouts/shared/components/Seo"
import MDXProvider from "@layouts/shared/components/MdxProvider"
import Breadcrumbs, { Breadcrumb } from "@layouts/shared/components/Breadcrumbs"
import { Hero, Sidebar } from "@layouts/shared/components/Blog"
import { getArchiveTitle } from "@layouts/shared/components/Blog/Sidebar"
import { BlogNode } from "@layouts/shared/components/Blog/shared/interface"
import { ImageNode, ImageSharp } from "@utils/image"
import PostSummary from "@layouts/shared/components/Blog/PostSummary"

interface BlogListProps {
  data: BlogListData
  pageContext: BlogListContext
}

interface BlogListData {
  allMdx: {
    nodes: Array<BlogNode>
  }
  bannerImages: {
    nodes: Array<HeroImageNode>
  }
}

type HeroImageNode = ImageNode & { absolutePath: string }

export const graphqlQuery = graphql`
  query blogListData {
    allMdx(filter: { fileAbsolutePath: { glob: "**/content/blog/**/__post.md" } }) {
      nodes {
        fileAbsolutePath
        fields {
          localeCode
          path
        }
        frontmatter {
          author
          date
          title
        }
        excerpt(pruneLength: 250)
      }
    }
    bannerImages: allFile(filter: { absolutePath: { glob: "**/content/blog/**/__banner.*" } }) {
      nodes {
        absolutePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 320, placeholder: NONE)
        }
      }
    }
  }
`

const BlogList = ({ data, pageContext }: BlogListProps): JSX.Element => {
  const { t } = useTranslation()
  const localeCode = useLocaleCode()

  const { archive } = pageContext

  const mdxNodesInLocale = data.allMdx.nodes.filter((mdxNode) => mdxNode.fields.localeCode === localeCode)

  /** Display only articles from selected archive, and order them by date. */
  let mdxNodes = sortMdxBlogNodesByDescendingDate(mdxNodesInLocale)
  if (archive) {
    mdxNodes = mdxNodes.filter((mdxNode) => {
      const postDate = new Date(mdxNode.frontmatter.date)
      return archive.isCurrentYear
        ? archive.year === postDate.getFullYear() && archive.month === postDate.getMonth()
        : archive.year === postDate.getFullYear()
    })
  }

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has("q")) {
      setSearchQuery(searchParams.get("q") || "")
    }
  }, [])

  const filteredMdxNodes = mdxNodes.filter((node) =>
    node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  function handleQueryChange(newQuery) {
    setSearchQuery(newQuery)
    const pathname = getLocalizedUrl("/blog", localeCode)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  let breadcrumbs: Array<Breadcrumb> = []
  if (archive) {
    breadcrumbs = [
      {
        path: pageContext.mainBlogPath,
        label: "Blog",
      },
      {
        label: `${t("misc.archive")} - ${getArchiveTitle(archive, t)}`,
      },
    ]
  }

  const meta: Meta = { title: "HubRise Blog" }
  const hero = {
    title: "The HubRise Blog",
    description: "New applications, evolutions of the API and real-world uses of HubRise",
  }

  const bannerImage = (blogPost: BlogNode): ImageSharp | undefined => {
    const folder = blogPost.fileAbsolutePath.replace(/\/__post\.md$/, "")
    return data.bannerImages.nodes.find((node) => node.absolutePath.startsWith(folder))?.childImageSharp
  }

  return (
    <MDXProvider>
      <SEO meta={meta} />

      {archive ? <Breadcrumbs breadcrumbs={breadcrumbs} /> : <Hero title={hero.title} description={hero.description} />}

      <section className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar searchQuery={searchQuery} onQueryChange={handleQueryChange} />
          <div className="section__content">
            {filteredMdxNodes.map((mdxNode, idx) => (
              <PostSummary key={idx} mdxNode={mdxNode} bannerImage={bannerImage(mdxNode)} />
            ))}
          </div>
        </div>
      </section>
    </MDXProvider>
  )
}

export default BlogList

export type { BlogListContext } from "./interface"
