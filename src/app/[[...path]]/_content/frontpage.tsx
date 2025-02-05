import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import Frontpage from "@layouts/Frontpage"
import { contentImageMap } from "@utils/contentImage"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const testimonialLogos: string[] = yaml.content.testimonials.testimonials.map((testimonial) => testimonial.logo)

  const [heroDescriptionMdx, useDescriptionMdx, pricingDescriptionMdx, partnersDescriptionMdx, testimonialLogoMap] =
    await Promise.all([
      serializeFrontpage(yaml.hero.description),
      serializeFrontpage(yaml.content.use.description),
      serializeFrontpage(yaml.content.pricing.description),
      serializeFrontpage(yaml.content.partners.description),
      contentImageMap("/images/app-logos", testimonialLogos),
    ])

  return (
    <Frontpage
      yaml={yaml}
      heroDescriptionMdx={heroDescriptionMdx}
      useDescriptionMdx={useDescriptionMdx}
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
