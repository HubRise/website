import * as React from "react"

import { IAppInfo } from "./interface"
import { StyledAppInfo, Value } from "./Styles"

import { generateKey } from "@utils/misc"
import Link from "@layouts/shared/components/Link"

interface AppInfoProps {
  appInfo: IAppInfo
}

const AppInfo = ({ appInfo }: AppInfoProps): JSX.Element => {
  return (
    <StyledAppInfo className="section__content">
      <ul>
        {Object.entries(appInfo).map(([label, value]) => {
          if (!value) return

          const labelWithSpaces = label.split(`_`).join(` `)
          const capitalizedLabel = labelWithSpaces[0].toUpperCase() + labelWithSpaces.slice(1)

          return (
            <li key={generateKey(label, value)}>
              {capitalizedLabel}:{` `}
              <Value>{label === `website` ? <Link to={value}>{value}</Link> : value}</Value>
            </li>
          )
        })}
      </ul>
    </StyledAppInfo>
  )
}

export default AppInfo

export type { IAppInfo } from "./interface"
