import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import BecomePartner from "@layouts/BecomePartner"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const becomePartner = async (route: Route<RouteName, "become-partner">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml

  const [middlewareDescriptionMdx, appsDescriptionMdx] = await Promise.all([
    serializeBecomePartnerContent(yaml.content.middleware.description),
    serializeBecomePartnerContent(yaml.content.apps.description),
  ])

  return (
    <BecomePartner
      yaml={yaml}
      getInTouch={getInTouch}
      middlewareDescriptionMdx={middlewareDescriptionMdx}
      appsDescriptionMdx={appsDescriptionMdx}
    />
  )
}

export default becomePartner

const serializeBecomePartnerContent = async (markdown: string): Promise<MDXRemoteSerializeResult> => {
  return serialize(markdown.replace(/\n/g, "\n\n"), {
    mdxOptions: {
      remarkPlugins: [remarkTextPlugin],
    },
  })
}
