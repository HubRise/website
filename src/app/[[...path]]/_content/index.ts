import { Router } from "@utils/router"
import { LayoutName, Route, RouteName } from "@utils/router/types"

import apps from "./apps"
import blogIndex from "./blogIndex"
import blogPost from "./blogPost"
import documentation from "./documentation"
import documentationIndex from "./documentationIndex"
import documentationSimple from "./documentationSimple"
import frontpage from "./frontpage"
import partners from "./partners"
import pricing from "./pricing"
import testimonials from "./testimonials"

export const renderContent = async (route: Route<RouteName, LayoutName>, router: Router): Promise<JSX.Element> => {
  switch (route.layout) {
    case "apps":
      return await apps(route as Route<RouteName, "apps">)
    case "blog-index":
      return await blogIndex(route as Route<RouteName, "blog-index">)
    case "blog-post":
      return await blogPost(route as Route<RouteName, "blog-post">, router)
    case "documentation":
      return await documentation(route as Route<RouteName, "documentation">, router)
    case "documentation-index":
      return await documentationIndex(route as Route<RouteName, "documentation-index">)
    case "documentation-simple":
      return await documentationSimple(route as Route<RouteName, "documentation-simple">, router)
    case "frontpage":
      return await frontpage(route as Route<RouteName, "frontpage">)
    case "partners":
      return await partners(route as Route<RouteName, "partners">)
    case "pricing":
      return await pricing(route as Route<RouteName, "pricing">)
    case "testimonials":
      return await testimonials(route as Route<RouteName, "testimonials">)
  }
}
