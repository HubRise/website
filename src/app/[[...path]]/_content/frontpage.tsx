import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Frontpage from "@layouts/Frontpage"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml

  const [
    heroDescriptionMdx,
    appsDescriptionMdx,
    apiDescriptionMdx,
    documentationDescriptionMdx,
    pricingDescriptionMdx,
    developersDescriptionMdx,
  ] = await Promise.all([
    serializeFrontpage(yaml.hero.description),
    serializeFrontpage(yaml.content.apps.description),
    serializeFrontpage(yaml.content.api.description),
    serializeFrontpage(yaml.content.documentation.description),
    serializeFrontpage(yaml.content.pricing.description),
    serializeFrontpage(yaml.content.developers.description),
  ])

  return (
    <Frontpage
      yaml={yaml}
      heroDescriptionMdx={heroDescriptionMdx}
      appsDescriptionMdx={appsDescriptionMdx}
      apiDescriptionMdx={apiDescriptionMdx}
      documentationDescriptionMdx={documentationDescriptionMdx}
      pricingDescriptionMdx={pricingDescriptionMdx}
      developersDescriptionMdx={developersDescriptionMdx}
    />
  )
}

export default frontpage

const serializeFrontpage = async (markdown: string): Promise<MDXRemoteSerializeResult> => {
  return serialize(markdown.replace(/\n/g, "\n\n"))
}
