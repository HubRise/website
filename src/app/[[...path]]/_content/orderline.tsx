import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Orderline from "@layouts/Orderline"
import { contentImageMap } from "@utils/contentImage"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const orderline = async (route: Route<RouteName, "orderline">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml
  const featuresImages: Array<string> = yaml.content.features.list.map((feature) => feature.image)

  const [featuresDescriptionMdx, featuresImagesMap, discoverDescriptionMdx] = await Promise.all([
    serializeOrderlineContent(yaml.content.features.description),
    contentImageMap("/images/orderline", featuresImages),
    serializeOrderlineContent(yaml.content.discover.description),
  ])

  return (
    <Orderline
      yaml={yaml}
      getInTouch={getInTouch}
      featuresDescriptionMdx={featuresDescriptionMdx}
      featuresImagesMap={featuresImagesMap}
      discoverDescriptionMdx={discoverDescriptionMdx}
    />
  )
}

export default orderline

const serializeOrderlineContent = async (markdown: string): Promise<MDXRemoteSerializeResult> => {
  return serialize(markdown.replace(/\n/g, "\n\n"), {
    mdxOptions: {
      remarkPlugins: [remarkTextPlugin],
    },
  })
}
