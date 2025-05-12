"use client"

import * as React from "react"

import ActionBlock from "@components/ActionBlock"
import Breadcrumbs from "@components/Breadcrumbs"
import DocumentationWrapper from "@components/DocumentationWrapper"
import useTranslation from "@hooks/client/useTranslation"
import { BlogMdFile } from "@utils/BlogIndexer/types"
import { DocLink, Href } from "@utils/DocIndexer/types"
import { ContentImage, ContentImageWithAlt } from "@utils/contentImage"

import Post from "./Post"
import { BlogPostContainer, BlogPostWrapper } from "./Styles"

export interface BlogPostProps {
  blogIndexUri: Href
  mdFile: BlogMdFile
  bannerImage?: ContentImage
  contentImages: Array<ContentImageWithAlt>
  mdFiles: Array<BlogMdFile>
  children: React.ReactNode
}

const BlogPost = ({
  blogIndexUri,
  mdFile,
  bannerImage,
  contentImages,
  mdFiles,
  children,
}: BlogPostProps): JSX.Element => {
  const { t } = useTranslation()

  const breadcrumbs: Array<DocLink> = [{ label: t("blog.title"), uri: blogIndexUri }]

  const actionBlockData = {
    title: t("blog.get_started.title"),
    description: t("blog.get_started.description"),
    button_label: t("blog.get_started.button_label"),
  }

  return (
    <DocumentationWrapper contentImages={contentImages} title={mdFile.frontMatter.title}>
      <BlogPostWrapper>
        <BlogPostContainer>
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <Post mdFile={mdFile} mdFiles={mdFiles} bannerImage={bannerImage}>
            {children}
          </Post>
        </BlogPostContainer>
      </BlogPostWrapper>
      <ActionBlock actionBlockData={actionBlockData} />
    </DocumentationWrapper>
  )
}

export default BlogPost
