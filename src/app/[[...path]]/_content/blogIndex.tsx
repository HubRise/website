import BlogIndex from "@layouts/BlogIndex"
import contentImage, { ContentImage } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const blogIndex = async (route: Route<RouteName, "blog-index">): Promise<JSX.Element> => {
  const { context } = route
  const { mdFiles } = context

  const bannerImages: { [blogUri: string]: ContentImage } = {}
  await Promise.all(
    mdFiles.map(async (mdFile) => {
      if (!mdFile.bannerFileName) return
      bannerImages[mdFile.uri] = await contentImage(mdFile.contentDirName, mdFile.bannerFileName)
    }),
  )

  return <BlogIndex mdFiles={mdFiles} bannerImages={bannerImages} />
}

export default blogIndex
