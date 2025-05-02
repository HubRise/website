"use client"

import Card from "@components/Card"
import PageHero from "@components/PageHero"
import ScreenContainer from "@components/ScreenContainer"
import useTranslation from "@hooks/client/useTranslation"
import { BlogMdFile } from "@utils/BlogIndexer/types"
import { ContentImage } from "@utils/contentImage"

import PostSummary from "./PostSummary"
import { Posts } from "./Styles"

interface BlogIndexProps {
  mdFiles: Array<BlogMdFile>
  bannerImages: { [blogUri: string]: ContentImage }
}

const BlogIndex = ({ mdFiles, bannerImages }: BlogIndexProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        title={
          <>
            <span>{t("blog.hero.title_part_1")} </span>
            {t("blog.hero.title_part_2")}
          </>
        }
        description={t("blog.hero.description")}
      />

      <ScreenContainer verticalPadding="small">
        <Posts>
          {mdFiles.map((mdFile, idx) => (
            <Card key={idx}>
              <PostSummary mdFile={mdFile} bannerImage={bannerImages[mdFile.uri]} />
            </Card>
          ))}
        </Posts>
      </ScreenContainer>
    </>
  )
}

export default BlogIndex
