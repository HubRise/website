import { LocaleCode } from "../../../utils/locales"
import { Breadcrumb } from "../../../layouts/shared/components/Breadcrumbs/interface"

import { Folder, getFolderFiles, getFolderPath } from "./folder"

/**
 * Returns the list of breadcrumbs leading up to a page.
 * @param folder: the direct parent folder of the page (eg the apps/deliveroo folder)
 * @param localeCode
 * @param nodeTitle: the page name (eg "map-ref-codes")
 */
export function getBreadcrumbs(folder: Folder, localeCode: LocaleCode, nodeTitle: string): Array<Breadcrumb> {
  function getFolderBreadcrumbs(folder: Folder): Array<Breadcrumb> {
    if (!folder.parent) return []

    const parentBreadcrumbs = getFolderBreadcrumbs(folder.parent)
    const customization = getFolderFiles(folder, localeCode)?.customization

    return parentBreadcrumbs.concat({
      label: customization?.name || folder.name,
      path: getFolderPath(folder, localeCode),
    })
  }

  return getFolderBreadcrumbs(folder).concat({
    label: nodeTitle,
  })
}
