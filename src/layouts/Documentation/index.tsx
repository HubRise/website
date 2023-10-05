"use client"

import * as React from "react"

import Breadcrumbs from "@components/Breadcrumbs"
import DocumentationContainer from "@components/DocumentationContainer"
import DocumentationWrapper from "@components/DocumentationWrapper"
import useTranslation from "@hooks/client/useTranslation"
import { DocFolder, DocMdFile } from "@utils/DocIndexer/types"
import { ContentImage, ContentImageWithAlt } from "@utils/contentImage"
import { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"

import AppInfo from "./AppInfo"
import Feedback from "./Feedback"
import Gallery from "./Gallery"
import { Content, LogoImage, LogoLink, Main, Navigation, Page, Warning } from "./Styles"

interface DocumentationProps {
  mdFile: DocMdFile
  folder: DocFolder
  headerLinks: Array<HeaderLink>
  logoImage?: ContentImage
  galleryImages: Array<ContentImage>
  contentImages: Array<ContentImageWithAlt>
  children: React.ReactNode
}

const Documentation = ({
  mdFile,
  folder,
  headerLinks,
  logoImage,
  galleryImages,
  contentImages,
  children,
}: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <DocumentationWrapper contentImages={contentImages} title={[folder.name, mdFile.frontMatter.title].join(" - ")}>
      <Breadcrumbs breadcrumbs={mdFile.breadcrumbs} />

      <Page>
        {mdFile.copyFromLanguage && <Warning>{t("documentation.language_warning." + mdFile.copyFromLanguage)}</Warning>}

        {logoImage && (
          <LogoLink href={folder.uri}>
            <LogoImage {...logoImage} alt={mdFile.frontMatter.title} />
          </LogoLink>
        )}

        <Navigation mdFile={mdFile} folder={folder} headerLinks={headerLinks} />

        <Main>
          <Content>
            <DocumentationContainer title={mdFile.frontMatter.title}>{children}</DocumentationContainer>
          </Content>

          {galleryImages.length > 0 && (
            <Content>
              <Gallery folder={folder} images={galleryImages} />
            </Content>
          )}

          {mdFile.frontMatter.app_info && (
            <Content>
              <AppInfo appInfo={mdFile.frontMatter.app_info} />
            </Content>
          )}
        </Main>
      </Page>

      <Feedback mdFile={mdFile} />
    </DocumentationWrapper>
  )
}

export default Documentation
