import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { BlogPostContext } from "./interface"

import SEO, { Meta } from "@layouts/shared/components/Seo"
import MDXProvider from "@layouts/shared/components/MdxProvider"
import Breadcrumbs, { Breadcrumb } from "@layouts/shared/components/Breadcrumbs"
import { ImageSharp } from "@utils/image"
import { BlogNode } from "@layouts/shared/components/Blog/shared/interface"
import Post from "@layouts/shared/components/Blog/Post"
import Layout from "@layouts/shared/components/Blog/Layout"

export interface BlogPostProps {
  data: BlogPostData
  pageContext: BlogPostContext
  children: React.ReactNode
}

interface BlogPostData {
  mdxNode: BlogPostNode
  bannerImage: {
    childImageSharp?: ImageSharp
  }
}

interface BlogPostNode extends BlogNode {
  frontmatter: BlogNode["frontmatter"] & {
    meta: Meta
  }
}

export const graphqlQuery = graphql`
  query blogPostData($mdxNodeId: String!, $bannerImagePathGlob: String!) {
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
    }
    bannerImage: file(absolutePath: { glob: $bannerImagePathGlob }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`

const BlogPost = ({ data, pageContext, children: body }: BlogPostProps): JSX.Element => {
  const { t } = useTranslation()

  const { mdxNode, bannerImage } = data
  const { frontmatter } = mdxNode
  const { meta } = frontmatter

  const breadcrumbs: Array<Breadcrumb> = [
    {
      path: pageContext.mainBlogPath,
      label: t("blog.title"),
    },
    { label: mdxNode.frontmatter.title },
  ]

  return (
    <MDXProvider>
      <SEO meta={meta} />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <Layout>
        <Post mdxNode={mdxNode} bannerImage={bannerImage?.childImageSharp}>
          {body}
        </Post>
      </Layout>
    </MDXProvider>
  )
}

export default BlogPost
