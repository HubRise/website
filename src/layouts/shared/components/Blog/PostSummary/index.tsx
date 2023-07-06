import * as React from "react"
import { useTranslation } from "react-i18next"

import { BlogNode } from "../shared/interface"
import DateAndAuthor from "../shared/components/DateAndAuthor"

import { BannerImage, Excerpt, ReadMore, StyledPostSummary, StyledTitle, Text } from "./Styles"

import { ImageSharp } from "@utils/image"
import Link from "@layouts/shared/components/Link"

interface PostProps {
  mdxNode: BlogNode
  bannerImage?: ImageSharp
}

const Post = ({ mdxNode, bannerImage }: PostProps): JSX.Element => {
  const { t } = useTranslation()
  const { frontmatter, excerpt, fields } = mdxNode

  return (
    <StyledPostSummary>
      <StyledTitle frontmatter={frontmatter} />

      {bannerImage && (
        <Link to={fields.path} addLocalePrefix={false}>
          <BannerImage image={bannerImage.gatsbyImageData} alt={frontmatter.title} />
        </Link>
      )}

      <Text>
        <DateAndAuthor frontmatter={frontmatter} />
        <Excerpt>{excerpt}</Excerpt>
        <ReadMore to={fields.path} addLocalePrefix={false}>
          {t("misc.read_more")}
        </ReadMore>
      </Text>
    </StyledPostSummary>
  )
}

export default Post
