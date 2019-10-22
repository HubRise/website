import React from 'react'
import Link from './link'
import { useTranslation } from 'react-i18next'

import HeaderMobile from './header_mobile'

import { generateKey } from './utils'

import logo from '../images/logo.png'

const Header = ({ path }) => {
  const { t } = useTranslation()

  return (
    <header className='header'>
      <div className='header__in'>
        <div className='header__desktop'>
          <div className='header__logo'>
            <Link to='/'>
              <img src={logo} alt='company-logo' />
            </Link>
          </div>
          <nav className='topbar-menu'>
            <ul className='topbar-menu__list'>
              {t(`layout.menu.links`)
                .filter(({ to }) => to !== `/`)
                .map(({ title, to }, idx) => (
                  <li key={generateKey(title, idx)} className='topbar-menu__item'>
                    <Link
                      className={`topbar-menu__link ${
                        path.startsWith(to) ? 'topbar-menu__link_active' : ''
                      }`}
                      to={to}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className='header__action'>
            <Link
              className='header__action-signup'
              to='https://manager.hubrise.com/signup'
              newTab={false}
            >
              {t(`layout.header.buttons.signup`)}
            </Link>
            <button className='header__action-login'>
              <Link
                to='https://manager.hubrise.com/login'
                newTab={false}
              >
                {t(`layout.header.buttons.login`)}
              </Link>
            </button>
          </div>
        </div>
        <HeaderMobile />
      </div>
    </header>
  )
}

export default Header
