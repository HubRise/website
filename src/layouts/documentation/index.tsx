import { graphql } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"

import AppInfo, { IAppInfo } from "./AppInfo"
import Feedback from "./Feedback"
import Gallery from "./Gallery"
import Navigator, { Heading } from "./Navigator"
import { DocumentationContext } from "./interface"
import { Content, Logo, Main, Warning, Page, Navigation, LogoImage } from "./Styles"

import { ImageSharp } from "@utils/image"
import SEO from "@layouts/shared/components/Seo"
import MDXProvider from "@layouts/shared/components/MdxProvider"
import Breadcrumbs from "@layouts/shared/components/Breadcrumbs"
import MDXCustomRenderer from "@layouts/shared/components/MdxCustomRenderer"
import { useLocaleCode } from "@utils/locales"
import Link from "@layouts/shared/components/Link"

interface DocumentationProps {
  data: DocumentationData
  path: string
  pageContext: DocumentationContext
  children: React.ReactNode
}

interface DocumentationData {
  mdxNode: DocumentationNode
  overviewImages: {
    nodes: Array<DocumentationImage>
  }
}

interface DocumentationNode {
  frontmatter: {
    app_info?: IAppInfo
    gallery?: Array<string>
    meta?: {
      description?: string
      title?: string
    }
    title: string
  }
  headings: Array<Heading>
  parent: {
    /** File path, eg: "apps/deliveroo/en/map-ref-codes.md" */
    relativePath: string
  }
}

interface DocumentationImage {
  ext: string
  name: string
  relativeDirectory: string
  childImageSharp: ImageSharp
}

export const graphqlQuery = graphql`
  query documentationData($mdxNodeId: String!, $overviewImagesDirectories: [String!]!) {
    mdxNode: mdx(id: { eq: $mdxNodeId }) {
      frontmatter {
        app_info {
          availability
          category
          contact
          price_range
          website
        }
        gallery
        meta {
          description
          title
        }
        title
      }
      headings {
        value
        depth
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
    overviewImages: allFile(
      filter: {
        relativeDirectory: { in: $overviewImagesDirectories }
        name: { regex: "/^__(logo|gallery)/" }
        children: { elemMatch: { internal: { type: { eq: "ImageSharp" } } } }
      }
    ) {
      nodes {
        ext
        name
        relativeDirectory
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, outputPixelDensities: [1])
        }
      }
    }
  }
`

const Documentation = ({ data, path, pageContext, children: body }: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()
  const localeCode = useLocaleCode()

  const { breadcrumbs, folderTitle, folderPages, logoImageName } = pageContext
  const { mdxNode, overviewImages } = data
  const { frontmatter, headings } = mdxNode
  const { meta, title, gallery, app_info: appInfo } = frontmatter

  const chapterMainPath = folderPages[0].path
  const logo = findOverviewImage(overviewImages, logoImageName)

  const galleryImageMap = new Map<string, ImageSharp>()
  if (gallery) {
    for (const imageName of gallery) {
      const image = findOverviewImage(overviewImages, imageName)
      if (image) galleryImageMap.set(imageName, image)
    }
  }

  const languageWarning =
    pageContext.contentLocaleCode && pageContext.contentLocaleCode !== localeCode
      ? t("documentation.language_warning." + pageContext.contentLocaleCode)
      : undefined

  return (
    <MDXProvider>
      <SEO meta={meta} />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <Page>
        {languageWarning && <Warning>{languageWarning}</Warning>}

        {logo && (
          <Logo>
            <Link to={chapterMainPath} addLocalePrefix={false}>
              <LogoImage alt={title} image={logo.gatsbyImageData} />
            </Link>
          </Logo>
        )}

        <Navigation>
          <Navigator currentPath={path} title={folderTitle} folderPages={folderPages} headings={headings} />
        </Navigation>

        <Main>
          <Content>
            <MDXCustomRenderer {...{ title, body }} />
          </Content>

          {galleryImageMap.size > 0 && (
            <Content>
              <Gallery title={folderTitle} imageMap={galleryImageMap} />
            </Content>
          )}

          {appInfo && (
            <Content>
              <AppInfo appInfo={appInfo} />
            </Content>
          )}
        </Main>
      </Page>

      <Feedback relativePath={mdxNode.parent.relativePath} />
    </MDXProvider>
  )
}

export default Documentation

function findOverviewImage(images: DocumentationData["overviewImages"], name?: string): ImageSharp | undefined {
  const imageNode = images.nodes.find((node) => `${node.name}${node.ext}` === name)
  return imageNode?.childImageSharp
}

export type { DocumentationContext, FolderPage } from "./interface"
