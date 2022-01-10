import { CreatePagesArgs } from "gatsby"

import { getLayoutPath } from "../util/layout"
import { pathWithLocale } from "../util/urls"
import { generateLanguagePaths } from "../util/locale"
import { RootContext } from "../../../utils/context"
import { localeCodes } from "../../../utils/locales"

export async function createPages({ actions }: CreatePagesArgs): Promise<void> {
  const { createPage } = actions

  const getPath = (localeCode) => pathWithLocale(localeCode, "/404")

  localeCodes.forEach((localeCode) => {
    createPage<RootContext>({
      path: getPath(localeCode),
      matchPath: pathWithLocale(localeCode, "/*"),
      component: getLayoutPath("404"),
      context: {
        languagePaths: generateLanguagePaths(localeCode, getPath),
        localeCode,
      },
    })
  })
}
