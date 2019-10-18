import React from 'react'

import Link from '../../components/link'
import { generateKey, splitCamelCase } from '../../components/utils'

const Info = ({ content }) => {
  return (
    <div className='section__content'>
      <ul>
        {Object.entries(content).map(([ label, value ]) => {
          const labelWithSpaces = splitCamelCase(label)
          const capitalizedLabel = labelWithSpaces[0].toUpperCase() + labelWithSpaces.slice(1)

          return (
            <li key={generateKey(label, value)}>
              {capitalizedLabel}
              :{` `}
              <span style={{ fontWeight: 500 }}>
                {label === `website`
                  ? (
                    <Link to={value}>
                      {value}
                    </Link>
                  )
                  : value
                }
              </span>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default Info
