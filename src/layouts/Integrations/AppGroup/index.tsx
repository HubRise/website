import ScreenContainer from "@components/ScreenContainer"
import useTranslation from "@hooks/client/useTranslation"
import { IntegrationsYaml } from "@layouts/Integrations/types"
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
  apps: IntegrationsYaml["content"]["categories"][0]["apps"]
  logoImages: { [logo: string]: ContentImage }
  additionalSections: IntegrationsYaml["content"]["additional_sections"]
  hasSuggestApp: boolean
}

const AppGroup = ({ title, slug, apps, logoImages, additionalSections, hasSuggestApp }: AppGroupProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <ScreenContainer withHeader title={title} anchor={slug}>
      <Group>
        {apps.map((app, idx) => (
          <AppBoxLink key={idx} href={app.documentation || app.website || "#"} data-testid="apps:result">
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
    </ScreenContainer>
  )
}

export default AppGroup
