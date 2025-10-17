import { serializeContent } from "@components/SerializedMdxContent/serialize"
import Partners from "@layouts/Partners"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const partners = async (route: Route<RouteName, "partners">): Promise<JSX.Element> => {
  const yaml = route.context.yaml

  const imageMap = await contentImageMap(
    "/images/partners",
    yaml.content.partners.map((partner) => partner.filename),
  )

  const descriptionMdxMap = Object.fromEntries(
    await Promise.all(
      yaml.content.partners.map(
        async (partner) => [partner.filename, await serializeContent(partner.description)] as const,
      ),
    ),
  )

  return <Partners yaml={yaml} imageMap={imageMap} descriptionMdxMap={descriptionMdxMap} />
}

export default partners
