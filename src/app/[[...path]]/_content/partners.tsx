import Partners from "@layouts/Partners"
import { Route, RouteName } from "@utils/router/types"

const partners = async (route: Route<RouteName, "partners">): Promise<JSX.Element> => {
  return <Partners yaml={route.context.yaml} />
}

export default partners
