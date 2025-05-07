import * as fs from "fs/promises"
import { join } from "path"

import { imageHash } from "@utils/contentImage"
import { contentDirectory } from "@utils/files"

type Params = { path: Array<string> }

export const dynamicParams = false

// This function finds all images but only caches the query results, not the optimised images in .next/cache/images.
// TDOO: Find a way to fill .next/cache/images at build time.
// export async function _generateStaticParams(): Promise<Array<Params>> {
//   const isImage = (filename: string) => /\.(png|jpg|jpeg)$/i.test(filename)
//
//   const findImageFiles = async (...path: Array<string>): Promise<Array<Params>> => {
//     let pathParams: Params[] = []
//     const directory = join(contentDirectory, ...path)
//     const entries = await fs.readdir(directory, { withFileTypes: true })
//
//     for (const entry of entries) {
//       if (entry.isDirectory()) {
//         pathParams = pathParams.concat(await findImageFiles(...path, entry.name))
//       } else if (isImage(entry.name)) {
//         pathParams.push({ path: [...path, entry.name] })
//       }
//     }
//     return pathParams
//   }
//
//   return findImageFiles()
// }

// GET /api/image/[..path] returns the image at /content/[..path]
export async function GET(request: Request, { params }: { params: Params }): Promise<Response> {
  const { path } = params

  console.log(`Render image: ${path.join("/")}`)

  // The last part of the path has format: [hash]-[filename].
  const directories = path.slice(0, path.length - 1)
  // Only split at first dash, in case the filename contains dashes.
  const [hash, filename] = path[path.length - 1].split(/-(.+)/)
  const filePath = join(contentDirectory, ...directories, filename)

  // Check if the hash matches the image. If not, the image has been updated and the client should not cache it.
  const file = await fs.readFile(filePath)
  const isCorrectHash = hash === (await imageHash(file))

  return new Response(file, {
    headers: {
      "Content-Type": mimeType(path[path.length - 1]),
      // Cache-control only works with `yarn start`, it is overridden by Next with `yarn dev`.
      "Cache-Control": isCorrectHash ? "public, max-age=31536000, immutable" : "no-cache",
    },
  })
}

const mimeType = (filename: string): string => {
  const ext = filename.split(".").pop()
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg"
    case "png":
      return "image/png"
    case "svg":
      return "image/svg+xml"
    case "webp":
      return "image/webp"
    default:
      throw Error(`Image type not supported: "${filename}"`)
  }
}
