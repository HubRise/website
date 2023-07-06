import { GraphQLFunction } from "../util/types"
import { defaultLocaleCode, LocaleCode } from "../../../utils/locales"

import { Customization, CustomizationMap } from "./customization"
import { applyCopyFilesFrom, buildFolderFiles, buildFolders } from "./folder.helpers"

export interface Folder {
  /** The folder name (eg "deliveroo"). */
  name: string
  /** The path relative to /content (eg "apps/deliveroo"). */
  relativeDirectory: string
  parent?: Folder
  children: Array<Folder>
  folderFilesMap: FolderFilesMap
}

export type FolderFilesMap = {
  [K in LocaleCode]?: FolderFiles
}

export interface FolderFiles {
  customization: Customization
  /** MDX nodes sorted by position */ mdxNodes: Array<MDXDocumentationNode>
}

export interface MDXDocumentationNode {
  id: string
  internal: {
    contentFilePath: string
  }
  body: string
  fields: {
    localeCode: LocaleCode
  }
  frontmatter: {
    layout: "documentation" | "documentation-index" | "documentation-simple"
    path_override?: string
    position: number
    title: string
  }
  parent: {
    id: string
    /** File name, eg: "map-ref-codes" */
    name: string
    /** Directory path, eg: "apps/deliveroo/en" */
    relativeDirectory: string
    /** File path, eg: "apps/deliveroo/en/map-ref-codes.md" */
    relativePath: string
  }
}

interface FolderGQL {
  allMdx: {
    nodes: Array<MDXDocumentationNode>
  }
}

/**
 * Parses the MDX files in GraphQL and builds the Folder hierarchy from the MDX relative paths.
 * Returns the root Folder, which corresponds to the "content" folder (ie direct children are "apps", "base", ...).
 * @param graphql
 * @param customizationsMap
 */
export async function generateFolders(graphql: GraphQLFunction, customizationsMap: CustomizationMap): Promise<Folder> {
  const { data, errors } = await graphql<FolderGQL>(`
    query generateFolders {
      allMdx(
        filter: { frontmatter: { layout: { in: ["documentation", "documentation-index", "documentation-simple"] } } }
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            localeCode
          }
          frontmatter {
            layout
            path_override
            position
            title
          }
          parent {
            id
            ... on File {
              name
              relativeDirectory
              relativePath
            }
          }
        }
      }
    }
  `)
  if (errors) throw errors
  if (!data) throw "GraphQL returned no data"

  const folderFilesByPath = buildFolderFiles(data.allMdx.nodes, customizationsMap)
  const rootFolder = buildFolders(folderFilesByPath)
  applyCopyFilesFrom(rootFolder)
  return rootFolder
}

/**
 * Returns the path of a folder on the website with a leading slash (eg "/fr/deliveroo").
 * The root folder's path is a slash (eg "/").
 * @param folder
 * @param localeCode
 */
export function getFolderPath(folder: Folder, localeCode: LocaleCode): string {
  if (!folder.parent) {
    return localeCode === defaultLocaleCode ? "/" : `/${localeCode}`
  }

  const customization = getFolderFiles(folder, localeCode)?.customization
  const parentPath = getFolderPath(folder.parent, localeCode)
  const overridenName = customization?.path_override || folder.name
  return parentPath === "/" ? `/${overridenName}` : `${parentPath}/${overridenName}`
}

export function getFolderFiles(folder: Folder, localeCode: LocaleCode): FolderFiles | undefined {
  return folder.folderFilesMap[localeCode] || folder.folderFilesMap[defaultLocaleCode]
}

/**
 * Returns the path where images are stored, relative to "content", with no leading slash (eg "contributing/images").
 * @param folder
 */
export function getImagesRelativeDirectory(folder: Folder): string {
  return folder.relativeDirectory + "/images"
}
