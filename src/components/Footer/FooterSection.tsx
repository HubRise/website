import * as React from 'react'

import { generateKey } from '@utils/misc'
import Link from '@components/Link'
import { IFooter } from '@components/Footer/interface'

const FooterSection = ({
  title,
  links
}: IFooter['sections'][number]): JSX.Element => (
  <div className="footer-nav__section">
    <div className="footer-nav__header">{title}</div>

    <ul className="footer-nav__list">
      {links.map(({ title, to }, idx) => (
        <li key={generateKey(title, idx)} className="footer-nav__item">
          <Link
            to={to}
            addLocalePrefix={false}
            className="footer-nav__item-link"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default FooterSection
