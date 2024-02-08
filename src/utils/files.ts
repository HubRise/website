import * as fs from "fs/promises"
import { join } from "path"

import * as yaml from "yaml"

export const contentDirectory = join(process.cwd(), "content")

// Relative path to content directory, e.g. "/apps/kezia"
export type ContentDirName = `/${string}`

export async function readMdFile<TypeFrontMatter = Record<string, any>>(
  contentDirName: ContentDirName,
  basename: string,
): Promise<{
  frontMatter: TypeFrontMatter
  content: string
}> {
  const mdFile = join(contentDirectory + contentDirName, `${basename}.md`)
  let data: string
  try {
    data = await fs.readFile(mdFile, "utf8")
  } catch (e) {
    console.error(`Error in readMdFile for ${mdFile} `, e)
    throw e
  }

  const splitData = data.split("---")
  if (splitData.length >= 3) {
    return {
      frontMatter: yaml.parse(splitData[1]) || {},
      content: splitData.slice(2).join("---").replace(/^\n/, "").replace(/\n$/, ""),
    }
  } else {
    throw new Error(`Frontmatter missing in ${mdFile}`)
  }
}

export async function readYamlFile<T = any>(contentDirName: ContentDirName, basename: string): Promise<T>
export async function readYamlFile<T = any>(
  contentDirName: ContentDirName,
  basename: string,
  undefIfError: true,
): Promise<T | undefined>
export async function readYamlFile<T = any>(
  contentDirName: ContentDirName,
  basename: string,
  undefIfError?: boolean,
): Promise<T | undefined> {
  const yamlFile = join(contentDirectory + contentDirName, `${basename}.yaml`)
  try {
    const data = await fs.readFile(yamlFile, "utf8")
    return yaml.parse(data) as T
  } catch (e) {
    if (undefIfError) return undefined
    console.error(`Error in readYamlFile for ${yamlFile} `, e)
    throw e
  }
}

export async function listEntries(
  contentDirName: ContentDirName,
  type: "files" | "directories",
): Promise<Array<string>> {
  try {
    const entries = await fs.readdir(contentDirectory + contentDirName, { withFileTypes: true })
    return entries
      .filter((entry) => (type === "files" ? entry.isFile() : entry.isDirectory()))
      .map((entry) => entry.name)
  } catch (e) {
    console.error(`Failed to read directory ${contentDirName}: ${e}`)
    throw e
  }
}
