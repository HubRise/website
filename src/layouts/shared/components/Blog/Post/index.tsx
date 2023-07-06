import * as React from "react"

import { BlogNode } from "../shared/interface"
import DateAndAuthor from "../shared/components/DateAndAuthor"

import { BannerImage, StyledPost, StyledTitle } from "./Styles"

import MDXCustomRenderer from "@layouts/shared/components/MdxCustomRenderer"
import { ImageSharp } from "@utils/image"

interface PostProps {
  mdxNode: BlogNode
  bannerImage?: ImageSharp
  children: React.ReactNode
}

const Post = ({ mdxNode, bannerImage, children: body }: PostProps): JSX.Element => {
  const { frontmatter } = mdxNode

  return (
    <StyledPost>
      <StyledTitle frontmatter={frontmatter} />

      <DateAndAuthor frontmatter={frontmatter} />

      {bannerImage && <BannerImage image={bannerImage.gatsbyImageData} alt={frontmatter.title} />}

      <MDXCustomRenderer body={body} />
    </StyledPost>
  )
}

export default Post
