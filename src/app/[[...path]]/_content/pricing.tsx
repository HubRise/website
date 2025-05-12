import Pricing from "@layouts/Pricing"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const pricing = async (route: Route<RouteName, "pricing">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const [founderImageMap] = await Promise.all([contentImageMap("/images/team", [yaml.content.founder.image])])

  return <Pricing yaml={yaml} founderImageMap={founderImageMap} />
}

export default pricing
