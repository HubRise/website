import { graphql } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"

import AppInfo, { IAppInfo } from "./AppInfo"
import Feedback from "./Feedback"
import Gallery from "./Gallery"
import Navigator, { Heading } from "./Navigator"
import { DocumentationContext } from "./interface"

import { ImageSharp } from "@utils/image"
import SEO from "@layouts/shared/components/Seo"
import MDXProvider from "@layouts/shared/components/MdxProvider"
import Breadcrumbs from "@layouts/shared/components/Breadcrumbs"
import DocumentationRenderer from "@layouts/shared/components/DocumentationRenderer"
import { useLocaleCode } from "@utils/locales"

interface DocumentationProps {
  data: DocumentationData
  path: string
  pageContext: DocumentationContext
}

interface DocumentationData {
  mdxNode: DocumentationNode
  images: {
    nodes: Array<DocumentationImage>
  }
}

interface DocumentationNode {
  body: string
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
  query documentationData($mdXNodeId: String!, $imagesRelativeDirectory: String!) {
    mdxNode: mdx(id: { eq: $mdXNodeId }) {
      body
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
        depth
        value
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
    images: allFile(
      filter: {
        relativeDirectory: { eq: $imagesRelativeDirectory }
        name: { regex: "/^__(logo|gallery)/" }
        children: { elemMatch: { internal: { type: { eq: "ImageSharp" } } } }
      }
    ) {
      nodes {
        ext
        name
        relativeDirectory
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

const Documentation = ({ data, path, pageContext }: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()
  const localeCode = useLocaleCode()

  const { breadcrumbs, folderTitle, folderPages, logoImageName } = pageContext

  const currentMdxNode = data.mdxNode

  const { frontmatter, body, headings } = currentMdxNode
  const { meta, title, gallery, app_info: appInfo } = frontmatter

  const logoImage = findImage(data.images, logoImageName)

  const galleryImageMap = new Map<string, ImageSharp>()
  if (gallery) {
    for (const imageName of gallery) {
      const image = findImage(data.images, imageName)
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

      <section className="section">
        <div
          className={`
          section__in
          section__in_padding
          section__in_reverse
          section__in_developers
        `}
        >
          {languageWarning && <header className="section__language-warning">{languageWarning}</header>}

          <div className="section__content">
            <DocumentationRenderer {...{ title, body }} />
          </div>

          <Navigator
            logo={logoImage}
            currentPath={path}
            title={folderTitle}
            folderPages={folderPages}
            headings={headings}
          />

          {galleryImageMap.size > 0 && <Gallery title={folderTitle} imageMap={galleryImageMap} />}

          {appInfo && <AppInfo appInfo={appInfo} />}
        </div>
      </section>

      <Feedback relativePath={currentMdxNode.parent.relativePath} />
    </MDXProvider>
  )
}

export default Documentation

function findImage(images: DocumentationData["images"], name?: string): ImageSharp | undefined {
  const imageNode = images.nodes.find((node) => `${node.name}${node.ext}` === name)
  return imageNode?.childImageSharp
}

export type { DocumentationContext, FolderPage } from "./interface"
