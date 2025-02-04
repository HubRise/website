import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Frontpage from "@layouts/Frontpage"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml

  const [heroDescriptionMdx, useDescriptionMdx, pricingDescriptionMdx] = await Promise.all([
    serializeFrontpage(yaml.hero.description),
    serializeFrontpage(yaml.content.use.description),
    serializeFrontpage(yaml.content.pricing.description),
  ])

  return (
    <Frontpage
      yaml={yaml}
      heroDescriptionMdx={heroDescriptionMdx}
      useDescriptionMdx={useDescriptionMdx}
      pricingDescriptionMdx={pricingDescriptionMdx}
    />
  )
}

export default frontpage

const serializeFrontpage = async (markdown: string): Promise<MDXRemoteSerializeResult> => {
  return serialize(markdown.replace(/\n/g, "\n\n"), {
    mdxOptions: {
      remarkPlugins: [remarkTextPlugin],
    },
  })
}
