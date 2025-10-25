import { Metadata } from "next"

import { pathLanguage404 } from "@app/[[...path]]/_utils"
import { getTranslation } from "@utils/i18n/server"
import { LayoutName, Route, RouteName } from "@utils/router/types"

export const metadata404 = async (path?: Array<string>): Promise<Metadata> => {
  const language = pathLanguage404(path)
  return {
    title: getTranslation(language, "layout.404.meta.title"),
  }
}

export const metadata = async (route: Route<RouteName, LayoutName>): Promise<Metadata> => {
  switch (route.layout) {
    case "apps":
      return (route as Route<RouteName, "apps">).context.yaml.meta
    case "become-partner":
      return (route as Route<RouteName, "become-partner">).context.yaml.meta
    case "blog-index":
      return { title: getTranslation(route.language, "blog.hero.meta_title") }
    case "blog-post":
      return (route as Route<RouteName, "blog-post">).context.mdFile.frontMatter.meta
    case "branding":
      return (route as Route<RouteName, "branding">).context.yaml.meta
    case "catalog-manager":
      return (route as Route<RouteName, "catalog-manager">).context.yaml.meta
    case "contact-us":
      return (route as Route<RouteName, "contact-us">).context.yaml.meta
    case "dashboard":
      return (route as Route<RouteName, "dashboard">).context.yaml.meta
    case "documentation":
      return (route as Route<RouteName, "documentation">).context.mdFile.frontMatter.meta
    case "documentation-index":
      return (route as Route<RouteName, "documentation-index">).context.yaml.meta
    case "faqs":
      return (route as Route<RouteName, "faqs">).context.yaml.meta
    case "frontpage":
      return (route as Route<RouteName, "frontpage">).context.yaml.meta
    case "orderline":
      return (route as Route<RouteName, "orderline">).context.yaml.meta
    case "partners":
      return (route as Route<RouteName, "partners">).context.yaml.meta
    case "pricing":
      return (route as Route<RouteName, "pricing">).context.yaml.meta
    case "testimonials":
      return (route as Route<RouteName, "testimonials">).context.yaml.meta
    default:
      return route.layout satisfies never // TS check that all layouts are handled
  }
}
