import * as React from "react"
import { useTranslation } from "react-i18next"

import { Section, ItemLink, ListItem } from "./Styles"

export interface InstructionsProps {
  relativePath: string
}

const Instructions = ({ relativePath }: InstructionsProps): JSX.Element => {
  const { t } = useTranslation()

  const gitHubPath = `https://github.com/HubRise/website/edit/master/content/${relativePath}`
  const supportEmail = "mailto:support@hubrise.com"

  return (
    <Section>
      <div>{t(`misc.feedback.documentation.description`)}</div>
      <ul>
        <ListItem key={supportEmail}>
          <ItemLink to={supportEmail}>{t("misc.feedback.documentation.options.send_email")}</ItemLink>
        </ListItem>
        <ListItem key={gitHubPath}>
          <ItemLink to={gitHubPath}>{t("misc.feedback.documentation.options.edit_page")}</ItemLink>
        </ListItem>
      </ul>
    </Section>
  )
}

export default Instructions
