import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { sortMdxBlogNodesByDescendingDate } from "./helpers"
import { BlogListContext } from "./interface"

import { useLocaleCode } from "@utils/locales"
import SEO, { Meta } from "@layouts/shared/components/Seo"
import MDXProvider from "@layouts/shared/components/MdxProvider"
import Breadcrumbs, { Breadcrumb } from "@layouts/shared/components/Breadcrumbs"
import { getArchiveTitle } from "@layouts/shared/components/Blog/Sidebar"
import { BlogNode } from "@layouts/shared/components/Blog/shared/interface"
import { ImageNode, ImageSharp } from "@utils/image"
import PostSummary from "@layouts/shared/components/Blog/PostSummary"
import Hero from "@layouts/shared/components/Blog/Hero"
import Layout from "@layouts/shared/components/Blog/Layout"

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
    allMdx(filter: { internal: { contentFilePath: { glob: "**/blog/**/__post.md" } } }) {
      nodes {
        internal {
          contentFilePath
        }
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
          gatsbyImageData(layout: CONSTRAINED, outputPixelDensities: [1, 2])
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

  let mdxNodes = sortMdxBlogNodesByDescendingDate(mdxNodesInLocale)

  if (archive) {
    mdxNodes = mdxNodes.filter((mdxNode) => {
      const postDate = new Date(mdxNode.frontmatter.date)
      return archive.isCurrentYear
        ? archive.year === postDate.getFullYear() && archive.month === postDate.getMonth()
        : archive.year === postDate.getFullYear()
    })
  }

  let breadcrumbs: Array<Breadcrumb> = []
  if (archive) {
    breadcrumbs = [
      {
        path: pageContext.mainBlogPath,
        label: "Blog",
      },
      {
        path: pageContext.mainBlogPath,
        label: t("blog.older_posts"),
      },
      {
        label: getArchiveTitle(archive, t),
      },
    ]
  }

  const meta: Meta = { title: "HubRise Blog" }
  const hero = {
    title: t("blog.hero.title"),
    description: t("blog.hero.description"),
  }

  const bannerImage = (blogPost: BlogNode): ImageSharp | undefined => {
    const folder = blogPost.internal.contentFilePath.replace(/\/__post\.md$/, "")
    return data.bannerImages.nodes.find((node) => node.absolutePath.startsWith(folder))?.childImageSharp
  }

  return (
    <MDXProvider>
      <SEO meta={meta} />

      {archive ? <Breadcrumbs breadcrumbs={breadcrumbs} /> : <Hero title={hero.title} description={hero.description} />}

      <Layout>
        {mdxNodes.map((mdxNode, idx) => (
          <PostSummary key={idx} mdxNode={mdxNode} bannerImage={bannerImage(mdxNode)} />
        ))}
      </Layout>
    </MDXProvider>
  )
}

export default BlogList

export type { BlogListContext } from "./interface"
