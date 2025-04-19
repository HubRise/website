import { Router } from "@utils/router"
import { LayoutName, Route, RouteName } from "@utils/router/types"

import blogIndex from "./blogIndex"
import blogPost from "./blogPost"
import branding from "./branding"
import contactUs from "./contactUs"
import documentation from "./documentation"
import documentationIndex from "./documentationIndex"
import faqs from "./faqs"
import frontpage from "./frontpage"
import integrations from "./integrations"
import orderline from "./orderline"
import partners from "./partners"
import pricing from "./pricing"
import testimonials from "./testimonials"

export const renderContent = async (route: Route<RouteName, LayoutName>, router: Router): Promise<JSX.Element> => {
  switch (route.layout) {
    case "apps":
      return await integrations(route as Route<RouteName, "apps">)
    case "blog-index":
      return await blogIndex(route as Route<RouteName, "blog-index">)
    case "blog-post":
      return await blogPost(route as Route<RouteName, "blog-post">, router)
    case "documentation":
      return await documentation(route as Route<RouteName, "documentation">, router)
    case "documentation-index":
      return await documentationIndex(route as Route<RouteName, "documentation-index">)
    case "branding":
      return await branding(route as Route<RouteName, "branding">)
    case "contact-us":
      return await contactUs(route as Route<RouteName, "contact-us">)
    case "faqs":
      return await faqs(route as Route<RouteName, "faqs">)
    case "frontpage":
      return await frontpage(route as Route<RouteName, "frontpage">)
    case "orderline":
      return await orderline(route as Route<RouteName, "orderline">)
    case "partners":
      return await partners(route as Route<RouteName, "partners">)
    case "pricing":
      return await pricing(route as Route<RouteName, "pricing">)
    case "testimonials":
      return await testimonials(route as Route<RouteName, "testimonials">)
  }
}
