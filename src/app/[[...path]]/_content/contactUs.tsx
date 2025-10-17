import ContactUs from "@layouts/ContactUs"
import { Route, RouteName } from "@utils/router/types"

const contactUs = async (route: Route<RouteName, "contact-us">): Promise<JSX.Element> => {
  const yaml = route.context.yaml

  return <ContactUs yaml={yaml} />
}

export default contactUs
