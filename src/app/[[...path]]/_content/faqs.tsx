import FAQs from "@layouts/FAQs"
import { Route, RouteName } from "@utils/router/types"

const faqs = async (route: Route<RouteName, "faqs">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml

  return <FAQs yaml={yaml} getInTouch={getInTouch} />
}

export default faqs
