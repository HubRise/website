import Block from "@components/Block"
import useTranslation from "@hooks/client/useTranslation"
import { AppsYaml } from "@layouts/Apps/types"
import { ContentImage } from "@utils/contentImage"
import { text } from "@utils/misc"

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

interface AppGroupProps {
  title: string
  slug: string
  apps: AppsYaml["content"]["categories"][0]["apps"]
  logoImages: { [logo: string]: ContentImage }
  additionalSections: AppsYaml["content"]["additional_sections"]
  hasSuggestApp: boolean
}

const AppGroup = ({ title, slug, apps, logoImages, additionalSections, hasSuggestApp }: AppGroupProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Block backgroundColor="none" title={title} titleAnchor={slug}>
      <Group>
        {apps.map((app, idx) => (
          <AppBoxLink key={idx} href={app.documentation || app.website || "#"} data-test="apps:result">
            {logoImages[app.logo] && (
              <AppLogo>
                <AppLogoImage {...logoImages[app.logo]} alt={app.title} />
              </AppLogo>
            )}

            <AppDocumentation>
              {app.documentation ? t("apps.view_documentation") : t("apps.visit_website")}
            </AppDocumentation>

            <AppDescription>{text(app.description)}</AppDescription>

            {app.additional_info && <AppAdditionalInfo>{text(app.additional_info)}</AppAdditionalInfo>}
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

export default AppGroup
