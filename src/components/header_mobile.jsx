import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Link from './link'

import { generateKey } from './utils'

import logo from '../images/logo.png'
import button from '../images/bread_button.png'

const HeaderMobile = () => {
  const [ isVisible, setIsVisible ] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      {isVisible && (
        <div
          className='header__mobile__overlay'
          onClick={() => setIsVisible(!isVisible)}
        />
      )}
      <div className='header__mobile'>
        <div className='mobile-bar'>
          <button
            id='mobile-bar-button'
            className='mobile-bar__button'
            type='button'
            style={{
              backgroundImage: `url(${button})`,
              backgroundRepeat: 'no-repeat'
            }}
            onClick={() => setIsVisible(!isVisible)}
          />
          <Link className='mobile-bar__logo' to='/'>
            <img src={logo} alt='company-logo' />
          </Link>
        </div>
        {isVisible && (
          <div id='mobile-bar-menu' className='mobile-bar__menu'>
            <div className='mobile-bar__header'>
              <button
                onClick={() => setIsVisible(!isVisible)}
                className='mobile-bar__close-button'
                id='mobile-bar-close'
              >
                <i className='fa fa-angle-left fa-pull-left' />
                <span className='mobile-bar__sclose-button-span'>Menu</span>
              </button>
            </div>
            <nav className='mobile-bar__content'>
              <ul className='leftbar-menu'>
                {t(`layout.menu.links`).map(({ to, title }, idx) => (
                  <li
                    key={generateKey(title, idx)}
                    className='leftbar-menu__item'
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <Link to={to} className='leftbar-menu__link'>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='header__action header__action_sidenav'>
                <Link
                  to='https://manager.hubrise.com/signup'
                  className='header__action-signup'
                >
                  Sign up
                </Link>
                <button className='header__action-login'>
                  <Link to='https://manager.hubrise.com/login'>Login</Link>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}

export default HeaderMobile
