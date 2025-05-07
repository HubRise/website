import { Language } from "@utils/locales"
import { slugify } from "@utils/misc"

export const buildPath = (language: Language, ...pathWithoutLanguage: Array<string>): string => {
  return [...[language === "en" ? [] : [`/${language}`]], ...pathWithoutLanguage].join("/") || "/"
}

export const appsCategoryPath = (language: Language, categoryTitle: string): string => {
  return buildPath(language, "apps", slugify(categoryTitle))
}

export const appsPath = (language: Language): string => {
  return buildPath(language, "apps")
}
