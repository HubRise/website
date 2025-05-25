import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Frontpage from "@layouts/Frontpage"
import { contentImageMap } from "@utils/contentImage"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const testimonials = route.testimonials.yaml
  const testimonialLogos: string[] = testimonials.content.testimonials.map(
    (testimonial) => testimonial.person_details.logo,
  )
  const featuresImages: string[] = yaml.content.features.features_cards.map((feature) => feature.image)
  const appLogos: Array<string> = yaml.content.apps.map(({ logo }) => logo)

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
      testimonials={testimonials}
      heroDescriptionMdx={heroDescriptionMdx}
      appLogosMap={appLogosMap}
      featuresDescriptionMdx={featuresDescriptionMdx}
      featuresImagesMap={featuresImagesMap}
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
