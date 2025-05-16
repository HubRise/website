import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import CatalogManager from "@layouts/CatalogManager"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const catalogManager = async (route: Route<RouteName, "catalog-manager">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml

  const [salesChannelsDescriptionMdx, appDescriptionMdx] = await Promise.all([
    serializeBecomePartnerContent(yaml.content.sales_channels.description),
    serializeBecomePartnerContent(yaml.content.app.description),
  ])

  return (
    <CatalogManager
      yaml={yaml}
      getInTouch={getInTouch}
      salesChannelsDescriptionMdx={salesChannelsDescriptionMdx}
      appDescriptionMdx={appDescriptionMdx}
    />
  )
}

export default catalogManager

const serializeBecomePartnerContent = async (markdown: string): Promise<MDXRemoteSerializeResult> => {
  return serialize(markdown.replace(/\n/g, "\n\n"), {
    mdxOptions: {
      remarkPlugins: [remarkTextPlugin],
    },
  })
}
