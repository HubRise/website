import * as React from "react"

import useTranslation from "@hooks/client/useTranslation"
import { DocMdFile } from "@utils/DocIndexer/types"

import { ItemLink, ListItem, Description, List, StyledInstructions } from "./Styles"

export interface InstructionsProps {
  mdFile: DocMdFile
}

const Instructions = ({ mdFile }: InstructionsProps): JSX.Element => {
  const { t } = useTranslation()

  const gitHubPath = `https://github.com/HubRise/website/edit/master/content${mdFile.contentDirName}/${mdFile.baseName}.md`
  const supportEmail = "mailto:support@hubrise.com"

  return (
    <StyledInstructions>
      <Description>{t(`misc.feedback.documentation.description`)}</Description>

      <List>
        <ListItem key={supportEmail}>
          <ItemLink href={supportEmail}>{t("misc.feedback.documentation.options.send_email")}</ItemLink>
        </ListItem>
        <ListItem key={gitHubPath}>
          <ItemLink href={gitHubPath} target="_blank" rel="noopener noreferrer">
            {t("misc.feedback.documentation.options.edit_page")}
          </ItemLink>
        </ListItem>
      </List>
    </StyledInstructions>
  )
}

export default Instructions
