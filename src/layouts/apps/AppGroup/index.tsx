import * as React from "react"
import { useTranslation } from "react-i18next"

import { IAdditionalSections, IApp } from "../interface"

import {
  Group,
  AppBoxLink,
  AppLogo,
  AppDocumentation,
  AppDescription,
  AppAdditionalInfo,
  AppBoxStatic,
  EmailLink,
} from "./Styles"

import { generateKey } from "@utils/misc"
import { ImageNode } from "@utils/image"

interface AppSectionProps {
  title: string
  showTitle: boolean
  apps: Array<IApp>
  logoNodes: Array<AppImageNode>
  additionalSections: IAdditionalSections
  hasSuggestApp: boolean
}

export type AppImageNode = ImageNode & { base: string }

const App = ({
  title,
  showTitle,
  apps,
  logoNodes,
  additionalSections,
  hasSuggestApp,
}: AppSectionProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <section className="section section__center">
      {showTitle && <h3 className="section__title">{title}</h3>}

      <Group>
        {apps.map((app, idx) => {
          const logo = logoNodes.find(({ base }) => base === app.logo)
          if (!logo) throw new Error(`${title} does not have a logo`)

          return (
            <AppBoxLink key={generateKey(title, idx)} to={app.documentation || app.website}>
              <AppLogo
                image={logo.childImageSharp.gatsbyImageData}
                imgStyle={{ objectFit: "scale-down" }}
                alt={title}
              />

              <AppDocumentation>
                {app.documentation ? t("apps.view_documentation") : t("apps.visit_website")}
              </AppDocumentation>

              <AppDescription>{app.description}</AppDescription>

              {app.additional_info && <AppAdditionalInfo>{app.additional_info}</AppAdditionalInfo>}
            </AppBoxLink>
          )
        })}

        {hasSuggestApp && (
          <AppBoxStatic>
            {additionalSections.suggest_app.description}
            <EmailLink to="mailto:contact@hubrise.com">contact@hubrise.com</EmailLink>
          </AppBoxStatic>
        )}
      </Group>
    </section>
  )
}

export default App
