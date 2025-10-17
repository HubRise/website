import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import Button from "@components/Button"
import DateAndAuthor from "@components/DateAndAuthor"
import useTranslation from "@hooks/client/useTranslation"
import { BlogMdFile } from "@utils/BlogIndexer/types"
import { ContentImage } from "@utils/contentImage"
import { text } from "@utils/misc"

import { BannerImage, CardText, CardTitle, ReadMoreWrapper } from "./Styles"

interface PostSummaryProps {
  mdFile: BlogMdFile
  bannerImage?: ContentImage
}

const PostSummary = ({ mdFile, bannerImage }: PostSummaryProps): JSX.Element => {
  const { t } = useTranslation()
  const { frontMatter } = mdFile
  return (
    <>
      {bannerImage && (
        <Link href={mdFile.uri}>
          <BannerImage>
            <Image {...bannerImage} alt={mdFile.frontMatter.title} />
          </BannerImage>
        </Link>
      )}

      <Link href={mdFile.uri}>
        <CardTitle>{text(frontMatter.title)}</CardTitle>
      </Link>

      <DateAndAuthor frontMatter={frontMatter} />
      {mdFile.frontMatter.excerpt && <CardText>{text(mdFile.frontMatter.excerpt)}</CardText>}

      <ReadMoreWrapper>
        <Button label={t("misc.read_more")} link={mdFile.uri} type="secondary" />
      </ReadMoreWrapper>
    </>
  )
}

export default PostSummary
