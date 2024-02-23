import Testimonials from "@layouts/Testimonials"
import { Route, RouteName } from "@utils/router/types"

const testimonials = async (route: Route<RouteName, "testimonials">): Promise<JSX.Element> => {
  return <Testimonials yaml={route.context.yaml} />
}

export default testimonials
