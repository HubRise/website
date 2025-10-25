import { serializeContent } from "@components/SerializedMdxContent/serialize"
import Orderline from "@layouts/Orderline"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const orderline = async (route: Route<RouteName, "orderline">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml
  const featuresImages: Array<string> = yaml.content.features.list.map((feature) => feature.image)

  const [featuresDescriptionMdx, featuresImagesMap, discoverDescriptionMdx] = await Promise.all([
    serializeContent(yaml.content.features.description),
    contentImageMap("/images/orderline", featuresImages),
    serializeContent(yaml.content.discover.description),
  ])

  return (
    <Orderline
      yaml={yaml}
      getInTouch={getInTouch}
      featuresDescriptionMdx={featuresDescriptionMdx}
      featuresImagesMap={featuresImagesMap}
      discoverDescriptionMdx={discoverDescriptionMdx}
    />
  )
}

export default orderline
