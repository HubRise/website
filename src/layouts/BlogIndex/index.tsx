"use client"

import Hero from "@components/Blog/Hero"
import Layout from "@components/Blog/Layout"
import PostSummary from "@components/Blog/PostSummary"
import { getYearArchiveTitle } from "@components/Blog/Sidebar/helpers"
import Breadcrumbs from "@components/Breadcrumbs"
import useTranslation from "@hooks/client/useTranslation"
import { BlogArchives, BlogMdFile } from "@utils/BlogIndexer/types"
import { DocLink, Href } from "@utils/DocIndexer/types"
import { ContentImage } from "@utils/contentImage"

export interface BlogFilter {
  year?: number
}

interface BlogIndexProps {
  blogIndexUri: Href
  archives: BlogArchives
  mdFiles: Array<BlogMdFile>
  bannerImages: { [blogUri: string]: ContentImage }
  filter: BlogFilter
}

const BlogIndex = ({ blogIndexUri, archives, mdFiles, bannerImages, filter }: BlogIndexProps): JSX.Element => {
  const { t } = useTranslation()

  let breadcrumbs: Array<DocLink> | undefined
  if (filter.year) {
    breadcrumbs = [
      { label: "Blog", uri: blogIndexUri },
      { label: getYearArchiveTitle(filter.year, t), uri: blogIndexUri },
    ]
  }

  return (
    <>
      {breadcrumbs ? (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      ) : (
        <Hero title={t("blog.hero.title")} description={t("blog.hero.description")} />
      )}

      <Layout archives={archives}>
        {mdFiles.map((mdFile, idx) => (
          <PostSummary key={idx} mdFile={mdFile} bannerImage={bannerImages[mdFile.uri]} />
        ))}
      </Layout>
    </>
  )
}

export default BlogIndex
