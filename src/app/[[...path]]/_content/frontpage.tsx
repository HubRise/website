import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Frontpage from "@layouts/Frontpage"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const teamFilenames = yaml.content.developers.team_members.map((member) => member.filename)

  const [
    heroDescriptionMdx,
    appsDescriptionMdx,
    apiDescriptionMdx,
    documentationDescriptionMdx,
    pricingDescriptionMdx,
    developersDescriptionMdx,
    teamImageMap,
  ] = await Promise.all([
    serializeFrontpage(yaml.hero.description),
    serializeFrontpage(yaml.content.apps.description),
    serializeFrontpage(yaml.content.api.description),
    serializeFrontpage(yaml.content.documentation.description),
    serializeFrontpage(yaml.content.pricing.description),
    serializeFrontpage(yaml.content.developers.description),
    contentImageMap("/images/team", teamFilenames),
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
      teamImageMap={teamImageMap}
    />
  )
}

export default frontpage

const serializeFrontpage = async (markdown: string): Promise<MDXRemoteSerializeResult> => {
  return serialize(markdown.replace(/\n/g, "\n\n"))
}
