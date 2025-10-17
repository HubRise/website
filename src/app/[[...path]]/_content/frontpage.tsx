import { serializeContent } from "@components/SerializedMdxContent/serialize"
import Frontpage from "@layouts/Frontpage"
import { contentImageMap, contentImagesFromFolder } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const frontpage = async (route: Route<RouteName, "frontpage">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const featuresImages: Array<string> = yaml.content.features.features_cards.map((feature) => feature.image)

  const testimonials = route.testimonials.yaml
  const testimonialLogos: Array<string> = testimonials.content.testimonials
    .map((testimonial) => testimonial.person_details.logo)
    .filter(Boolean) as Array<string>

  const [
    heroDescriptionMdx,
    appLogosMap,
    featuresDescriptionMdx,
    featuresImagesMap,
    pricingDescriptionMdx,
    includedAppsDescriptionMdx,
    partnersDescriptionMdx,
    testimonialDescriptionMdx,
    testimonialLogoMap,
  ] = await Promise.all([
    serializeContent(yaml.hero.description),
    contentImagesFromFolder("/images/app-logos"),
    serializeContent(yaml.content.features.description),
    contentImageMap("/images/frontpage/proposals", featuresImages),
    serializeContent(yaml.content.pricing.description),
    serializeContent(yaml.content.included_apps.description),
    serializeContent(yaml.content.partners.description),
    serializeContent(yaml.content.testimonials.description),
    contentImageMap("/images", testimonialLogos),
  ])

  return (
    <Frontpage
      yaml={yaml}
      heroDescriptionMdx={heroDescriptionMdx}
      appLogosMap={appLogosMap}
      featuresDescriptionMdx={featuresDescriptionMdx}
      featuresImagesMap={featuresImagesMap}
      pricingDescriptionMdx={pricingDescriptionMdx}
      includedAppsDescriptionMdx={includedAppsDescriptionMdx}
      partnersDescriptionMdx={partnersDescriptionMdx}
      testimonials={testimonials}
      testimonialDescriptionMdx={testimonialDescriptionMdx}
      testimonialLogoMap={testimonialLogoMap}
    />
  )
}

export default frontpage
