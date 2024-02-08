import Pricing from "@layouts/Pricing"
import { Route, RouteName } from "@utils/router/types"

const pricing = async (route: Route<RouteName, "pricing">): Promise<JSX.Element> => {
  return <Pricing yaml={route.context.yaml} />
}

export default pricing
