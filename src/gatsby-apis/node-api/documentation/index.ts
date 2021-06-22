import { Actions, CreateNodeArgs } from 'gatsby'
import * as Gatsby from 'gatsby'

import { generateCustomizationMap } from './customization'
import {
  Folder,
  FolderFiles,
  generateFolders,
  getFolderFiles,
  getFolderPath,
  getImagesRelativeDirectory,
  MDXDocumentationNode
} from './folder'
import { getFolderPages, getPagePath } from './page'
import { getBreadcrumbs } from './breadcrumbs'
import { getLayoutPath } from '../util/layout'
import { generateLanguagePaths, parseRelativePath } from '../util/locale'
import { LocaleCode, localeCodes } from '../../../utils/locales'
import { DocumentationContext } from '../../../layouts/documentation'

export async function onCreateNode({ node, actions }: CreateNodeArgs) {
  if (node.internal.type === 'Mdx') {
    const { localeCode } = parseRelativePath(node.fileAbsolutePath as string)

    await actions.createNodeField({
      node,
      name: 'localeCode',
      value: localeCode
    })
  }
}

export const createPages = async ({
  graphql,
  actions
}: Gatsby.CreatePagesArgs) => {
  const customizationsMap = await generateCustomizationMap(graphql)
  const rootFolder = await generateFolders(graphql, customizationsMap)

  createDocumentationPagesInFolder(actions, rootFolder)
}

function createDocumentationPagesInFolder(
  actions: Actions,
  folder: Folder
): void {
  for (let localeCode of localeCodes) {
    const folderFiles = getFolderFiles(folder, localeCode)
    if (!folderFiles) continue

    for (let mdxNode of folderFiles.mdxNodes) {
      createDocumentationPage(actions, folder, localeCode, folderFiles, mdxNode)
    }
  }

  for (let childFolder of folder.children) {
    createDocumentationPagesInFolder(actions, childFolder)
  }
}

function createDocumentationPage(
  actions: Actions,
  folder: Folder,
  localeCode: LocaleCode,
  folderFiles: FolderFiles,
  mdxNode: MDXDocumentationNode
) {
  const path = getPagePath(folder, mdxNode, localeCode)
  const breadcrumbs = getBreadcrumbs(
    folder,
    localeCode,
    mdxNode.frontmatter.title
  )

  const folderPages = getFolderPages(folder, folderFiles, localeCode)
  const imagesRelativeDirectory = getImagesRelativeDirectory(folder)
  const customization = folderFiles.customization

  const getLanguagePath = (localeCode) => getFolderPath(folder, localeCode)

  actions.createPage<DocumentationContext>({
    path,
    component: getLayoutPath(mdxNode.frontmatter.layout),
    context: {
      breadcrumbs,
      contentLocaleCode: mdxNode.fields.localeCode,
      folderPages,
      folderTitle: customization.name,
      imagesRelativeDirectory,
      languagePaths: generateLanguagePaths(localeCode, getLanguagePath),
      localeCode,
      logoImageName: customization.logo,
      mdXNodeId: mdxNode.id
    }
  })
}
