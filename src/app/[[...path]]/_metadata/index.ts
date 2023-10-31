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
    case "blog-index":
      return { title: getTranslation(route.language, "blog.hero.title") }
    case "blog-post":
      return (route as Route<RouteName, "blog-post">).context.mdFile.frontMatter.meta
    case "documentation":
      return (route as Route<RouteName, "documentation">).context.mdFile.frontMatter.meta
    case "documentation-index":
      return (route as Route<RouteName, "documentation-index">).context.yaml.meta
    case "documentation-simple":
      return (route as Route<RouteName, "documentation-simple">).context.frontMatter.meta
    case "frontpage":
      return (route as Route<RouteName, "frontpage">).context.yaml.meta
    case "pricing":
      return (route as Route<RouteName, "pricing">).context.yaml.meta
  }
}
