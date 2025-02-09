import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Frontpage from "@layouts/Frontpage"
import { contentImageMap } from "@utils/contentImage"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const testimonialLogos: string[] = yaml.content.testimonials.testimonials.map((testimonial) => testimonial.logo)
  const proposalsImages: string[] = yaml.content.proposals.proposals_cards.map((proposal) => proposal.image)
  const appLogos: Array<string> = []
  yaml.content.apps.forEach(({ column }) => column.map((logo) => appLogos.push(logo.logo)))

  const [
    heroDescriptionMdx,
    appLogosMap,
    proposalsDescriptionMdx,
    proposalsImagesMap,
    pricingDescriptionMdx,
    partnersDescriptionMdx,
    testimonialLogoMap,
  ] = await Promise.all([
    serializeFrontpage(yaml.hero.description),
    contentImageMap("/images/app-logos", appLogos),
    serializeFrontpage(yaml.content.proposals.description),
    contentImageMap("/images/proposals", proposalsImages),
    serializeFrontpage(yaml.content.pricing.description),
    serializeFrontpage(yaml.content.partners.description),
    contentImageMap("/images/app-logos", testimonialLogos),
  ])

  return (
    <Frontpage
      yaml={yaml}
      heroDescriptionMdx={heroDescriptionMdx}
      appLogosMap={appLogosMap}
      proposalsDescriptionMdx={proposalsDescriptionMdx}
      proposalsImagesMap={proposalsImagesMap}
      pricingDescriptionMdx={pricingDescriptionMdx}
      partnersDescriptionMdx={partnersDescriptionMdx}
      testimonialLogoMap={testimonialLogoMap}
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
