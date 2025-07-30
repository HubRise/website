import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Frontpage from "@layouts/Frontpage"
import { contentImageMap } from "@utils/contentImage"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const appLogos: Array<string> = yaml.content.apps.map((app) => app.logo)
  const featuresImages: Array<string> = yaml.content.features.features_cards.map((feature) => feature.image)

  const testimonials = route.testimonials.yaml
  const testimonialLogos: Array<string> = testimonials.content.testimonials.map((t) => t.person_details.logo)

  const [
    heroDescriptionMdx,
    appLogosMap,
    featuresDescriptionMdx,
    featuresImagesMap,
    pricingDescriptionMdx,
    partnersDescriptionMdx,
    testimonialLogoMap,
  ] = await Promise.all([
    serializeFrontpage(yaml.hero.description),
    contentImageMap("/images/app-logos", appLogos),
    serializeFrontpage(yaml.content.features.description),
    contentImageMap("/images/frontpage/proposals", featuresImages),
    serializeFrontpage(yaml.content.pricing.description),
    serializeFrontpage(yaml.content.partners.description),
    contentImageMap("/images/app-logos", testimonialLogos),
  ])

  return (
    <Frontpage
      yaml={yaml}
      heroDescriptionMdx={heroDescriptionMdx}
      appLogosMap={appLogosMap}
      featuresDescriptionMdx={featuresDescriptionMdx}
      featuresImagesMap={featuresImagesMap}
      pricingDescriptionMdx={pricingDescriptionMdx}
      partnersDescriptionMdx={partnersDescriptionMdx}
      testimonials={testimonials}
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
