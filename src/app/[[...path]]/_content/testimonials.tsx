import Testimonials from "@layouts/Testimonials"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const testimonials = async (route: Route<RouteName, "testimonials">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const imageMap = await contentImageMap(
    "/images/testimonials",
    yaml.content.testimonials.map((testimonial) => testimonial.filename),
  )

  return <Testimonials yaml={route.context.yaml} imageMap={imageMap} />
}

export default testimonials
