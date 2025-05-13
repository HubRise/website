import DocumentationIndex from "@layouts/DocumentationIndex"
import { contentImageMap } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const documentationIndex = async (route: Route<RouteName, "documentation-index">): Promise<JSX.Element> => {
  const yaml = route.context.yaml
  const thumbIcons: string[] = yaml.content.thumbs.map((thumb) => thumb.icon)

  const [thumbIconsMap] = await Promise.all([contentImageMap("/images/thumb-icons", thumbIcons)])

  return <DocumentationIndex yaml={yaml} thumbIconsMap={thumbIconsMap} />
}

export default documentationIndex
