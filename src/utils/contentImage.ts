import crypto from "crypto"
import fs from "fs/promises"
import { join, normalize } from "path"
import { promisify } from "util"

import imageSize from "image-size"
import sharp from "sharp"

import { contentDirectory, ContentDirName } from "@utils/files"
const sizeOf = promisify(imageSize)

export interface ContentImage {
  src: string
  width: number
  height: number
  blurDataURL: string
}

export type ContentImageMap = { [filename: string]: ContentImage }

export interface ContentImageWithAlt extends ContentImage {
  alt?: string
}

/**
 * Look for an image in the `content` directory, and return its path and dimensions. Must be used from a server
 * component.
 * @param contentDirName The directory name(s) to search in. Can be a string or an array.
 * @param filename
 */
const contentImage = async (
  contentDirName: ContentDirName | Array<ContentDirName>,
  filename: string,
): Promise<ContentImage> => {
  const contentPath = await findImage(contentDirName, filename)
  const filePath = join(contentDirectory, contentPath)

  // Get the image dimensions.
  const res = await sizeOf(filePath)
  if (!res || !res.width || !res.height) throw Error(`Image invalid "${filePath}"`)

  const file = await fs.readFile(filePath)

  // Add the hash to the last part of the image path, so that we can consider the path immutable.
  const hash = await imageHash(file)
  const pathWithHash = contentPath.replace(/\/([^/]+)$/, `/${hash}-$1`)
  const imagePath = `/api/image${pathWithHash}`

  // Responsive dimensions
  const is2x = filename.includes("-2x-")
  const displayedWidth = res.width / (is2x ? 2 : 1)
  const displayedHeight = res.height / (is2x ? 2 : 1)

  // Placeholder image
  const blurDataURL = await generateBlurDataURL(file)

  return { src: imagePath, width: displayedWidth, height: displayedHeight, blurDataURL }
}

/**
 * Fetches multiple images at once. Must be used from a server component.
 * @param filenames
 */
export const contentImageMap = async (
  contentDirName: ContentDirName | Array<ContentDirName>,
  filenames: Array<string>,
): Promise<ContentImageMap> => {
  const imageMap: ContentImageMap = {}
  await Promise.all(
    filenames.map(async (filename) => {
      imageMap[filename] = await contentImage(contentDirName, filename)
    }),
  )
  return imageMap
}

/**
 * Returns the path to the first image found, or throws an error.
 * @param contentDirName The directory name(s) to search in. Can be a string or an array.
 * @param filename
 */
async function findImage(
  contentDirName: ContentDirName | Array<ContentDirName>,
  filename: string,
): Promise<ContentDirName> {
  const contentDirs = Array.isArray(contentDirName) ? contentDirName : [contentDirName]
  for (const dirName of contentDirs) {
    const contentPath: ContentDirName = `${dirName}/${filename}`
    try {
      await fs.stat(contentDirectory + contentPath)
      return normalize(contentPath) as ContentDirName
    } catch (e) {}
  }

  const paths = contentDirs.map((dirName) => contentDirectory + dirName + "/" + filename)
  throw Error(`Image not found "${paths.join('" or "')}"`)
}

export async function imageHash(imageBuffer: Buffer): Promise<string> {
  const md5 = crypto.createHash("md5")
  md5.update(imageBuffer)
  return md5.digest("hex")
}

async function generateBlurDataURL(imageBuffer: Buffer): Promise<string> {
  const blurredImageBuffer = await sharp(imageBuffer).resize(40, 40, { fit: "inside" }).blur(20).toBuffer()

  return `data:image/png;base64,${blurredImageBuffer.toString("base64")}`
}

export default contentImage
