import React from 'react'
import { useTranslation } from 'react-i18next'

import Link from './link'

import { generateKey } from './utils'

import logo from '../images/logo_footer.png'
import hero from '../images/hero_image_optimized.jpg'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      data-floater-footer
    >
      <div className="footer__in">
        <div className="footer__block">
          <ul className="footer-menu">
            {t(`layout.menu.links`).map(({ title, to }, idx) => (
              <li key={generateKey(title, idx)} className="footer-menu__item">
                <Link to={to} className="footer-menu__link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="footer__logo">
            <img src={logo} alt="company-logo" />
          </div>
        </div>
        <div className="footer__contacts">
          <h5 className="footer__title">{t(`layout.footer.contacts.title`)}</h5>
          <Link
            className="footer__contact-mail"
            to="mailto:contact@hubrise.com"
          >
            {t(`layout.footer.contacts.email`)}
          </Link>
        </div>
        <button
          className="footer__scroll-up"
          id="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fa fa-angle-up" />
        </button>
      </div>
      <div className="footer__copyright">
        <span className="footer__copyright-span">
          {t(`layout.footer.copyright`, {
            year: new Date(Date.now()).getFullYear()
          })}
        </span>
      </div>
    </footer>
  )
}

export default Footer
