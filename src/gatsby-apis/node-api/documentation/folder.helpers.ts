import { Folder, FolderFiles, MDXDocumentationNode } from './folder'
import { CustomizationMap } from './customization'
import { localeCodes } from '../../../utils/locales'

export function findOrInsertFolder(rootFolder: Folder, path: string): Folder {
  let folder = rootFolder

  path.split('/').forEach((dirname) => {
    let childFolder = folder.children.find((folder) => folder.name === dirname)
    if (!childFolder) {
      const relativeDirectory = folder.relativeDirectory
        ? `${folder.relativeDirectory}/${dirname}`
        : dirname
      childFolder = {
        children: [],
        folderFilesMap: {},
        name: dirname,
        parent: folder,
        relativeDirectory
      }
      folder.children.push(childFolder)
    }
    folder = childFolder
  })

  return folder
}

export function buildFolderFiles(
  nodes: Array<MDXDocumentationNode>,
  customizationsMap: CustomizationMap
): Map<string, FolderFiles> {
  const result = new Map<string, FolderFiles>()

  customizationsMap.forEach((customization, path) => {
    const folderFiles: FolderFiles = { customization, mdxNodes: [] }
    result.set(path, folderFiles)
  })

  for (let mdxNode of nodes) {
    const path = mdxNode.parent.relativeDirectory
    let folderFiles = result.get(path)
    if (!folderFiles) {
      console.log(
        `Skipping ${mdxNode.parent.relativePath}: no customization.yaml file was found in this file's directory.`
      )
      continue
    }
    folderFiles.mdxNodes.push(mdxNode)
  }

  return result
}

export function buildFolders(
  folderFilesByPath: Map<string, FolderFiles>
): Folder {
  const rootFolder: Folder = {
    children: [],
    folderFilesMap: {},
    name: '',
    relativeDirectory: ''
  }

  folderFilesByPath.forEach((folderFiles, path) => {
    // MDX files must be in a directory ending in /en or /fr, indicating the locale code of the MDX.
    const localeCode = localeCodes.find((code) => path.endsWith(code))
    if (!localeCode) {
      console.log(
        `The MD files located in ${path} will be skipped because they do not belong to a language folder (/en, /fr, etc.).`
      )
      return
    }

    const folderPath = path.replace(new RegExp(`(\/|^)${localeCode}$`), '')

    let folder: Folder
    if (folderPath === '') {
      folder = rootFolder
    } else {
      folder = findOrInsertFolder(rootFolder, folderPath)
    }

    // Sort MDX nodes in place
    folderFiles.mdxNodes.sort(
      (node1, node2) =>
        (node1.frontmatter.position || Number.MAX_SAFE_INTEGER) -
        (node2.frontmatter.position || Number.MAX_SAFE_INTEGER)
    )

    folder.folderFilesMap[localeCode] = folderFiles
  })

  return rootFolder
}

export function applyCopyFilesFrom(folder: Folder): void {
  for (let localeCode of localeCodes) {
    const folderFiles = folder.folderFilesMap[localeCode]
    if (!folderFiles) continue

    const copyFilesFrom = folderFiles.customization?.copy_files_from
    if (copyFilesFrom) {
      for (let node of folder.folderFilesMap[copyFilesFrom]?.mdxNodes || []) {
        if (node.frontmatter.layout !== 'documentation') continue
        folderFiles.mdxNodes = [...folderFiles.mdxNodes, node]
      }
    }
  }

  for (let childFolder of folder.children) {
    applyCopyFilesFrom(childFolder)
  }
}
