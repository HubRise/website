import { serializeContent } from "@components/SerializedMdxContent/serialize"
import CatalogManager from "@layouts/CatalogManager"
import { Route, RouteName } from "@utils/router/types"

const catalogManager = async (route: Route<RouteName, "catalog-manager">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const getInTouch = route.getInTouch.yaml

  const [salesChannelsDescriptionMdx, appDescriptionMdx] = await Promise.all([
    serializeContent(yaml.content.sales_channels.description),
    serializeContent(yaml.content.app.description),
  ])

  return (
    <CatalogManager
      yaml={yaml}
      getInTouch={getInTouch}
      salesChannelsDescriptionMdx={salesChannelsDescriptionMdx}
      appDescriptionMdx={appDescriptionMdx}
    />
  )
}

export default catalogManager
