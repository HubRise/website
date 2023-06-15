import { Actions, CreateNodeArgs } from "gatsby"
import * as Gatsby from "gatsby"
import { compileMDXWithCustomOptions } from "gatsby-plugin-mdx"
import visit from "unist-util-visit"
import toString from "mdast-util-to-string"

import { getLayoutPath } from "../util/layout"
import { generateLanguagePaths, parseRelativePath } from "../util/locale"
import { mdxNodeType } from "../util/mdx"
import { LocaleCode, localeCodes } from "../../../utils/locales"
import { DocumentationContext } from "../../../layouts/documentation"

import { generateCustomizationMap } from "./customization"
import {
  Folder,
  FolderFiles,
  generateFolders,
  getFolderFiles,
  getFolderPath,
  getImagesRelativeDirectory,
  MDXDocumentationNode,
} from "./folder"
import { getFolderPages, getPagePath } from "./page"
import { getBreadcrumbs } from "./breadcrumbs"

export async function createSchemaCustomization({
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  actions,
  schema,
  store,
}: Gatsby.CreateSchemaCustomizationArgs): Promise<void> {
  const { createTypes } = actions

  const remarkHeadingsPlugin = function remarkHeadingsPlugin() {
    return async function transformer(tree, file) {
      const headings: Array<{ value: string; depth: number }> = []

      visit(tree, `heading`, (heading) => {
        headings.push({
          value: toString(heading),
          depth: (heading as any).depth as number,
        })
      })

      const mdxFile = file
      if (!mdxFile.data.meta) {
        mdxFile.data.meta = {}
      }

      mdxFile.data.meta.headings = headings
    }
  }

  const headingsResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      headings: {
        type: `[MdxHeading]`,
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent)

          if (!fileNode) {
            return null
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: mdxNode.body,
              absolutePath: fileNode.absolutePath as string,
            },
            {
              pluginOptions: {
                plugins: [],
              },
              customOptions: {
                mdxOptions: {
                  remarkPlugins: [remarkHeadingsPlugin],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            },
          )

          if (!result) {
            return null
          }

          return result.metadata.headings
        },
      },
    },
  })

  createTypes([
    `
      type MdxHeading {
        value: String
        depth: Int
      }
    `,
    headingsResolver,
  ])
}

export async function onCreateNode({ node, actions }: CreateNodeArgs): Promise<void> {
  if (node.internal.type === "Mdx") {
    const contentFilePath = (node as any as MDXDocumentationNode).internal.contentFilePath
    if (mdxNodeType(contentFilePath) !== "documentation") return

    const { localeCode } = parseRelativePath(contentFilePath)

    await actions.createNodeField({
      node,
      name: "localeCode",
      value: localeCode,
    })
  }
}

export const createPages = async ({ graphql, actions }: Gatsby.CreatePagesArgs): Promise<void> => {
  const customizationsMap = await generateCustomizationMap(graphql)
  const rootFolder = await generateFolders(graphql, customizationsMap)

  createDocumentationPagesInFolder(actions, rootFolder)
}

function createDocumentationPagesInFolder(actions: Actions, folder: Folder): void {
  for (const localeCode of localeCodes) {
    const folderFiles = getFolderFiles(folder, localeCode)
    if (!folderFiles) continue

    for (const mdxNode of folderFiles.mdxNodes) {
      createDocumentationPage(actions, folder, localeCode, folderFiles, mdxNode)
    }
  }

  for (const childFolder of folder.children) {
    createDocumentationPagesInFolder(actions, childFolder)
  }
}

function createDocumentationPage(
  actions: Actions,
  folder: Folder,
  localeCode: LocaleCode,
  folderFiles: FolderFiles,
  mdxNode: MDXDocumentationNode,
) {
  const path = getPagePath(folder, mdxNode, localeCode)
  const breadcrumbs = getBreadcrumbs(folder, localeCode, mdxNode.frontmatter.title)

  const folderPages = getFolderPages(folder, folderFiles, localeCode)
  const imagesRelativeDirectory = getImagesRelativeDirectory(folder)
  const customization = folderFiles.customization

  const getLanguagePath = (localeCode) => getFolderPath(folder, localeCode)

  console.log("path", path, "mdxNode.internal", mdxNode.internal)

  actions.createPage<DocumentationContext>({
    path,
    component: `${getLayoutPath(mdxNode.frontmatter.layout)}?__contentFilePath=${mdxNode.internal.contentFilePath}`,
    context: {
      breadcrumbs,
      contentLocaleCode: mdxNode.fields.localeCode,
      folderPages,
      folderTitle: customization.name,
      imagesRelativeDirectory,
      languagePaths: generateLanguagePaths(localeCode, getLanguagePath),
      localeCode,
      logoImageName: customization.logo,
      mdxNodeId: mdxNode.id,
    },
  })
}
