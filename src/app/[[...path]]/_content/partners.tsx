import Partners from "@layouts/Partners"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const partners = async (route: Route<RouteName, "partners">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const imageMap = await contentImageMap(
    "/images/partners",
    yaml.content.partners.map((partner) => partner.filename),
  )

  return <Partners yaml={yaml} imageMap={imageMap} />
}

export default partners
