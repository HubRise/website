import { Href } from "@utils/DocIndexer/types"
import { Language } from "utils/locales"

import { ContentDirName } from "../files"

import allRoutes, { fallbackRoutes } from "./allRoutes"
import type {
  FallbackRoutes,
  LayoutName,
  Route,
  RouteName,
  RouteNameDocumentation,
  RouteNameDynamic,
  RouteNameStatic,
  RouteParamsDynamic,
  Routes,
} from "./types"

export class Router {
  constructor(
    private routes: Routes,
    private fallbackRoutes: FallbackRoutes,
  ) {}

  getHref<Name extends RouteNameStatic>(name: Name, language: Language): Href
  getHref<Name extends RouteNameDynamic>(name: Name, language: Language, params: RouteParamsDynamic<Name>): Href
  getHref(name: RouteName, language: Language, params: Record<string, any> = {}): Href {
    const route = this.findRoute(language, name, params)
    if (!route)
      throw new Error(`Route '${name}' not found for '${language}' language with params ${JSON.stringify(params)}`)
    return route.href
  }

  getRouteFromHref(href: string): Route<RouteName, LayoutName> | undefined {
    return this.routes.find((route) => route.href === href)
  }

  changeLanguage(route: Route<RouteName, LayoutName>, language: Language): Route<RouteName, LayoutName> {
    const params = "params" in route ? route.params : {}

    let targetRoute: Route<RouteName, LayoutName> | undefined
    let routeName: RouteName | undefined = route.name
    while (!targetRoute && routeName) {
      targetRoute = this.findRoute(language, routeName, params)
      routeName = this.fallbackRoutes[routeName]
    }

    if (!targetRoute) {
      targetRoute = this.findRoute(language, this.fallbackRoutes.default, params)
      if (!targetRoute) throw new Error(`Default route '${this.fallbackRoutes.default}' not found for '${language}'`)
    }

    return targetRoute
  }

  findDocumentationRoute(
    contentDirName: ContentDirName,
    basename: string,
    language: Language,
  ): Route<RouteNameDocumentation, LayoutName> | undefined {
    return this.routes.find((route) => {
      if (!("params" in route) || !("contentDirName" in route.params) || !("basename" in route.params)) return false
      return (
        route.language === language &&
        route.params.contentDirName === contentDirName &&
        route.params.basename === basename
      )
    }) as Route<RouteNameDocumentation, LayoutName> | undefined
  }

  private findRoute(
    language: Language,
    name: RouteName,
    params: Record<string, string>,
  ): Route<RouteName, LayoutName> | undefined {
    return this.routes.find(
      (route) =>
        route.language === language &&
        route.name === name &&
        (!("params" in route) || Object.entries(route.params).every(([key, value]) => params[key] === value)),
    )
  }
}

const router = async (): Promise<Router> => {
  const routes = await allRoutes()
  return new Router(routes, fallbackRoutes)
}

export default router
