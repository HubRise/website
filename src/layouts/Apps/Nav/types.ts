import { AppsYaml } from "@layouts/Apps/types"
import { Language } from "@utils/locales"

export interface NavProps {
  language: Language
  categories: AppsYaml["content"]["categories"]
  allAppsLabel: string
}
