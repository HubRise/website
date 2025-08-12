import Pricing from "@layouts/Pricing"
import contentImage from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const pricing = async (route: Route<RouteName, "pricing">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const founderImage = await contentImage("/images/team", yaml.content.founder.image)

  return <Pricing yaml={yaml} founderImage={founderImage} />
}

export default pricing
