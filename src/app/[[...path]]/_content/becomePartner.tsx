import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import BecomePartner from "@layouts/BecomePartner"
import { contentImageMap } from "@utils/contentImage"
import remarkTextPlugin from "@utils/mdx/remarkTextPlugin"
import { Route, RouteName } from "@utils/router/types"

const becomePartner = async (route: Route<RouteName, "become-partner">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml
  const testimonials = route.testimonials.yaml
  const testimonialLogos: string[] = testimonials.content.testimonials.map(
    (testimonial) => testimonial.person_details.logo,
  )

  const [middlewareDescriptionMdx, appsDescriptionMdx, testimonialLogoMap] = await Promise.all([
    serializeBecomePartnerContent(yaml.content.middleware.description),
    serializeBecomePartnerContent(yaml.content.apps.description),
    contentImageMap("/images/app-logos", testimonialLogos),
  ])

  return (
    <BecomePartner
      yaml={yaml}
      testimonials={testimonials}
      getInTouch={getInTouch}
      middlewareDescriptionMdx={middlewareDescriptionMdx}
      appsDescriptionMdx={appsDescriptionMdx}
      testimonialLogoMap={testimonialLogoMap}
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
