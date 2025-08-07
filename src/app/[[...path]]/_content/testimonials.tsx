import Testimonials from "@layouts/Testimonials"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const testimonials = async (route: Route<RouteName, "testimonials">): Promise<JSX.Element> => {
  const yaml = route.context.yaml

  // Check testimonials IDs are consecutive from n to 0, or else throw an error
  const ids = yaml.content.testimonials.map((t) => t.id)
  const expectedIds = Array.from({ length: ids.length }, (_, i) => ids.length - 1 - i)
  if (JSON.stringify(ids) !== JSON.stringify(expectedIds)) {
    const lang = route.language
    const firstMismatchIndex = ids.findIndex((id, i) => id !== expectedIds[i])
    const firstIncorrectName = yaml.content.testimonials[firstMismatchIndex]?.person_details?.name || "Unknown"
    throw new Error(
      `Incorrect "${firstIncorrectName}" entry in ${lang}/testimonials.yaml. Testimonial IDs should be consecutive. Expected "id: ${expectedIds[firstMismatchIndex]}" but found "id: ${ids[firstMismatchIndex]}".`,
    )
  }

  const imageMap = await contentImageMap(
    "/images/testimonials",
    yaml.content.testimonials.map((testimonial) => testimonial.filename),
  )

  return <Testimonials yaml={route.context.yaml} imageMap={imageMap} />
}

export default testimonials
