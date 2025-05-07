import DocumentationIndex from "@layouts/DocumentationIndex"
import { Route, RouteName } from "@utils/router/types"

const documentationIndex = async (route: Route<RouteName, "documentation-index">): Promise<JSX.Element> => {
  return <DocumentationIndex yaml={route.context.yaml} />
}

export default documentationIndex
