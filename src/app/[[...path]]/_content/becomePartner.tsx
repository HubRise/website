import { serializeContent } from "@components/SerializedMdxContent/serialize"
import BecomePartner from "@layouts/BecomePartner"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const becomePartner = async (route: Route<RouteName, "become-partner">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml
  const testimonials = route.testimonials.yaml
  const testimonialLogos: Array<string> = testimonials.content.testimonials
    .map((testimonial) => testimonial.person_details.logo)
    .filter(Boolean) as Array<string>

  const [middlewareDescriptionMdx, appsDescriptionMdx, testimonialLogoMap] = await Promise.all([
    serializeContent(yaml.content.middleware.description),
    serializeContent(yaml.content.apps.description),
    contentImageMap("/images", testimonialLogos),
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
