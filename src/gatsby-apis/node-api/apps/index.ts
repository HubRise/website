import { CreatePagesArgs } from "gatsby"

import { getLayoutPath } from "../util/layout"
import { generateLanguagePaths } from "../util/locale"
import { AppsContext } from "../../../layouts/apps"

import { getAppsMap, getAppsPagePath, IAppsMap } from "./graphql"

export async function createPages({ graphql, actions }: CreatePagesArgs): Promise<void> {
  const appsMap: IAppsMap = await getAppsMap(graphql)
  const getLanguagePath = (localeCode) => getAppsPagePath(localeCode)

  appsMap.forEach((apps, localeCode) => {
    actions.createPage<AppsContext>({
      path: apps.path,
      component: getLayoutPath("apps"),
      context: {
        languagePaths: generateLanguagePaths(localeCode, getLanguagePath),
        localeCode,
        apps,
      },
    })

    for (const category of apps.content.categories) {
      actions.createPage<AppsContext>({
        path: category.path,
        component: getLayoutPath("apps"),
        context: {
          apps,
          categoryTitle: category.title,
          languagePaths: generateLanguagePaths(localeCode, getLanguagePath),
          localeCode,
        },
      })
    }
  })
}
