import * as React from "react"

import Icon from "@components/Icon"
import useTranslation from "@hooks/client/useTranslation"
import { DocFrontMatter } from "@utils/DocIndexer/types"

import { IconWrapper, Item, Label, LinkValue, StyledAppInfo, Value } from "./Styles"
import { linkAppInfoIcon } from "./utils"

const AppInfo = ({ appInfo }: { appInfo: Exclude<DocFrontMatter["app_info"], undefined> }): JSX.Element => {
  const { t } = useTranslation()

  return (
    <StyledAppInfo>
      {Object.entries(appInfo).map(([key, value], index) => {
        if (!value) return

        const label = t(`documentation.app_info.${key}`) + t("misc.colon")
        return (
          <Item key={index}>
            <IconWrapper>
              <Icon code={linkAppInfoIcon(key)} size={16} />
            </IconWrapper>
            <Label>{label}</Label>
            <Value>
              {value.startsWith("http") ? (
                <LinkValue href={value} target="_blank" rel="noopener noreferrer">
                  {value}
                </LinkValue>
              ) : (
                value
              )}
            </Value>
          </Item>
        )
      })}
    </StyledAppInfo>
  )
}

export default AppInfo
