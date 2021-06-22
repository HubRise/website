import * as React from 'react'

import { generateKey } from '@utils/misc'
import Link from '@components/Link'
import { IAppInfo } from './interface'

interface AppInfoProps {
  appInfo: IAppInfo
}

const AppInfo = ({ appInfo }: AppInfoProps): JSX.Element => {
  return (
    <div className="section__content app-info">
      <ul className="app-info__list">
        {Object.entries(appInfo).map(([label, value]) => {
          if (!value) return ''

          const labelWithSpaces = label.split(`_`).join(` `)
          const capitalizedLabel =
            labelWithSpaces[0].toUpperCase() + labelWithSpaces.slice(1)

          return (
            <li key={generateKey(label, value)} className="app-info__item">
              {capitalizedLabel}:{` `}
              <span className="app-info__item-value">
                {label === `website` ? <Link to={value}>{value}</Link> : value}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AppInfo

export type { IAppInfo } from './interface'
