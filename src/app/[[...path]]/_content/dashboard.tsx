import Dashboard from "@layouts/Dashboard"
import { Route, RouteName } from "@utils/router/types"

const dashboard = async (route: Route<RouteName, "dashboard">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml

  return <Dashboard yaml={yaml} getInTouch={getInTouch} />
}

export default dashboard
