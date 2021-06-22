import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { LanguagePaths } from '@utils/context'
import { generateKey } from '@utils/misc'
import button from '@images/bread_button.png'
import logo from '@images/logo.png'
import Link from '@components/Link'
import { IHeaderLink } from './helpers'
import LanguageLinks from './LanguageLinks'

interface HeaderMobileProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderMobile = ({
  languagePaths,
  menuItems
}: HeaderMobileProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className="header-mobile">
        <div
          className="header-mobile__button"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={button} alt="Menu" />
        </div>
        <div className="header-mobile__logo">
          <Link className="header-mobile__logo-link" to="/">
            <img src={logo} alt="HubRise" />
          </Link>
        </div>
      </div>

      <div className="mobile-bar">
        <div
          className={classNames('mobile-bar__backdrop', {
            'mobile-bar__backdrop_open': isMenuOpen
          })}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={classNames('mobile-bar__menu', {
            'mobile-bar__menu_open': isMenuOpen
          })}
        >
          <header
            className="mobile-bar__header"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="mobile-bar__header-button">
              <i className="fa fa-angle-left" />
            </div>
            <div className="mobile-bar__header-title">Menu</div>
          </header>

          <div className="mobile-bar__nav">
            {menuItems.map(({ title, to }, idx) => {
              return (
                <Link
                  key={generateKey(title, idx)}
                  className="mobile-bar__nav-link"
                  activeClassName="mobile-bar__nav-link_active"
                  to={to}
                  addLocalePrefix={false}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              )
            })}

            <Link
              className="mobile-bar__nav-link mobile-bar__nav-link_signup"
              to="https://manager.hubrise.com/signup"
              newTab={false}
            >
              {t(`layout.header.buttons.signup`)}
            </Link>

            <Link
              className="mobile-bar__login"
              to="https://manager.hubrise.com/login"
              newTab={false}
            >
              {t(`layout.header.buttons.login`)}
            </Link>
          </div>

          <ul className="mobile-bar__language">
            <LanguageLinks
              languagePaths={languagePaths}
              liClassname="mobile-bar__language__item"
              liActiveClassname="mobile-bar__language__item_active"
              linkClassname="mobile-bar__language__link"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile
