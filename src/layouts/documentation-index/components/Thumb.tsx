import * as React from 'react'

import Link from '@components/Link'

export interface ThumbProps {
  description: string
  icon: string
  title: string
  to: string
}

const Thumb = ({ description, icon, title, to }: ThumbProps): JSX.Element => {
  return (
    <li className="developers-thumbs__item">
      <Link className="developers-thumbs__link" to={to} addLocalePrefix={false}>
        <i className={`developers-thumbs__icon fa ${icon}`} />
        <span className="developers-thumbs__title">{title}</span>
        <p className="developers-thumbs__description">{description}</p>
      </Link>
    </li>
  )
}

export default Thumb
