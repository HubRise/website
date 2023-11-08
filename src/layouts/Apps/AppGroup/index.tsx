import { useMemo } from "react"

import Block from "@components/Block"
import useTranslation from "@hooks/client/useTranslation"
import { AppsYaml } from "@layouts/Apps/types"
import { ContentImage } from "@utils/contentImage"

import {
  Group,
  AppBoxLink,
  AppLogo,
  AppDocumentation,
  AppDescription,
  AppAdditionalInfo,
  AppBoxStatic,
  EmailLink,
  AppLogoImage,
} from "./Styles"
import { doesSearchTextMatch } from "@utils/search"

interface AppSectionProps {
  title: string
  apps: AppsYaml["content"]["categories"][0]["apps"]
  logoImages: { [logo: string]: ContentImage }
  additionalSections: AppsYaml["content"]["additional_sections"]
  hasSuggestApp: boolean
  filterSearch: string
}

const App = ({
  title,
  apps,
  logoImages,
  additionalSections,
  hasSuggestApp,
  filterSearch,
}: AppSectionProps): JSX.Element => {
  const { t } = useTranslation()

  const filteredApps = useMemo(() => {
    const filteredArray = apps.filter((app) => doesSearchTextMatch(app.title, filterSearch) === true)
    return filterSearch ? filteredArray : apps
  }, [filterSearch, apps])

  if (filteredApps.length <= 0) {
    return <></>
  }

  return (
    <Block backgroundColor="none" title={filteredApps.length > 0 ? title : undefined}>
      <Group>
        {filteredApps.map((app, idx) => (
          <AppBoxLink key={idx} href={app.documentation || app.website}>
            {logoImages[app.logo] && (
              <AppLogo>
                <AppLogoImage {...logoImages[app.logo]} alt={app.title} />
              </AppLogo>
            )}

            <AppDocumentation>
              {app.documentation ? t("apps.view_documentation") : t("apps.visit_website")}
            </AppDocumentation>

            <AppDescription>{app.description}</AppDescription>

            {app.additional_info && <AppAdditionalInfo>{app.additional_info}</AppAdditionalInfo>}
          </AppBoxLink>
        ))}

        {hasSuggestApp && (
          <AppBoxStatic>
            {additionalSections.suggest_app.description}
            <EmailLink href="mailto:contact@hubrise.com">contact@hubrise.com</EmailLink>
          </AppBoxStatic>
        )}
      </Group>
    </Block>
  )
}

export default App
