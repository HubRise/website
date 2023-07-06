import * as React from "react"
import { useTranslation } from "react-i18next"

import { IAppInfo } from "./interface"
import { StyledAppInfo, Value } from "./Styles"

import { generateKey } from "@utils/misc"
import Link from "@layouts/shared/components/Link"

interface AppInfoProps {
  appInfo: IAppInfo
}

const AppInfo = ({ appInfo }: AppInfoProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <StyledAppInfo>
      <ul>
        {Object.entries(appInfo).map(([key, value]) => {
          if (!value) return

          const label = t(`documentation.app_info.${key}`) + t("misc.colon")
          return (
            <li key={generateKey(key, value)}>
              {label}
              {` `}
              <Value>{key === `website` ? <Link to={value}>{value}</Link> : value}</Value>
            </li>
          )
        })}
      </ul>
    </StyledAppInfo>
  )
}

export default AppInfo

export type { IAppInfo } from "./interface"
