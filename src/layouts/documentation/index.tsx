import { graphql } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { ImageSharpFluid } from '@utils/image'
import SEO from '@components/Seo'
import MDXProvider from '@components/MdxProvider'
import Breadcrumbs from '@components/Breadcrumbs'
import { AppInfo, Feedback, Gallery, SectionNavigation } from './components'
import { DocumentationContext } from './interface'
import { IAppInfo } from './components/AppInfo'
import { useTranslation } from 'react-i18next'

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
  parent: {
    /** File path, eg: "apps/deliveroo/en/map-ref-codes.md" */
    relativePath: string
  }
}

interface DocumentationImage {
  ext: string
  name: string
  relativeDirectory: string
  childImageSharp: ImageSharpFluid
}

export const graphqlQuery = graphql`
  query documentationData(
    $mdXNodeId: String!
    $imagesRelativeDirectory: String!
  ) {
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
          fluid {
            aspectRatio
            base64
            presentationWidth
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
`

const Documentation = ({
  data,
  path,
  pageContext
}: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    breadcrumbs,
    folderTitle,
    folderPages,
    localeCode,
    logoImageName
  } = pageContext

  const currentMdxNode = data.mdxNode

  const { frontmatter, body } = currentMdxNode
  const { meta, title, gallery, app_info: appInfo } = frontmatter

  const logoImage = findImage(data.images, logoImageName)

  const galleryImageMap = new Map<string, ImageSharpFluid>()
  if (gallery) {
    for (let imageName of gallery) {
      const image = findImage(data.images, imageName)
      if (image) galleryImageMap.set(imageName, image)
    }
  }

  const languageWarning =
    pageContext.contentLocaleCode &&
    pageContext.contentLocaleCode !== pageContext.localeCode
      ? t('documentation.language_warning.' + pageContext.contentLocaleCode)
      : undefined

  return (
    <MDXProvider>
      <SEO localeCode={localeCode} meta={meta} />

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
          <div className="section__content">
            {languageWarning && (
              <div className="section__language-warning">{languageWarning}</div>
            )}

            <div className="documentation">
              <h1>{title}</h1>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>

          <SectionNavigation
            logo={logoImage}
            currentPath={path}
            title={folderTitle}
            folderPages={folderPages}
          />

          {galleryImageMap.size > 0 && (
            <Gallery title={folderTitle} imageMap={galleryImageMap} />
          )}

          {appInfo && <AppInfo appInfo={appInfo} />}
        </div>
      </section>

      <Feedback relativePath={currentMdxNode.parent.relativePath} />
    </MDXProvider>
  )
}

export default Documentation

function findImage(
  images: DocumentationData['images'],
  name?: string
): ImageSharpFluid | undefined {
  const imageNode = images.nodes.find(
    (node) => `${node.name}${node.ext}` === name
  )
  return imageNode?.childImageSharp
}

export type { DocumentationContext, FolderPage } from './interface'
