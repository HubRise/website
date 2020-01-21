import React from 'react'

import Link from '../../components/link'
import { generateKey } from '../../components/utils'

export const AppInfo = ({ content }) => {
  return (
    <div className="section__content app-info">
      <ul className="app-info__list">
        {Object.entries(content).map(([label, value]) => {
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
