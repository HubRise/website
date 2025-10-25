import Branding from "@layouts/Branding"
import { Route, RouteName } from "@utils/router/types"

const branding = async (route: Route<RouteName, "branding">): Promise<JSX.Element> => {
  const yaml = route.context.yaml

  return <Branding yaml={yaml} />
}

export default branding
