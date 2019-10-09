import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation, Trans } from 'react-i18next'

import Link from '../components/link'

import { useLayoutContext } from '../context/layout'

import { generateKey } from '../components/utils'

import locales from '../i18n/locales'

export const PricingPage = ({ callToActionExtra }) => {
  const { t, i18n } = useTranslation()
  const { forms } = useLayoutContext()

  const queryString = `?locale=${locales[i18n.language].tag}`

  return (
    <section className='section section_white'>
      <div className='section__in section__in_padding'>
        <h3 className='section__title'>
          {t(`pages.pricing.title`)}
        </h3>
        <div className='section section_full-width section_vw section_padding'>
          <div className='section__in section__in_green section__in_padding'>
            <h3 className='section__title section__title_no-border'>
              <Trans i18nKey='pages.pricing.offer.value'>
                text
                <span className='section__title-span'>
                  text
                </span>
              </Trans>
            </h3>
            <ul className='section__price-list'>
              {t(`pages.pricing.offer.features`).map((feature, idx) => (
                <li
                  key={generateKey(feature, idx)}
                  className='section__price-item'
                >
                  <span className='section__price-span'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              className='button button_white button_section'
              to={`https://manager.hubrise.com/signup${queryString}`}
              newTab={false}
            >
              {t(`pages.pricing.offer.button`)}
            </Link>
          </div>
        </div>
        <p className='section__description section__description_large'>
          <Trans i18nKey='pages.pricing.special.free'>
            <b>text</b>
            text
            <Link
              className='section__description-link section__description-link_black'
              to={`https://manager.hubrise.com/signup${queryString}`}
              newTab={false}
            >
              text
            </Link>
          </Trans>
        </p>
        <p className='section__description section__description_large'>
          <Trans i18nKey='pages.pricing.special.large_accounts'>
            <b>text</b>
            text
            <button
              className='section__description-link section__description-link_black'
              data-open='contact-us'
              aria-controls='contact-us'
              aria-haspopup='true'
              tabIndex='0'
              onClick={forms.contact.toggle}
            >
              text
            </button>
          </Trans>
        </p>
        {callToActionExtra}
      </div>
    </section>
  )
}

PricingPage.propTypes = {
  callToActionExtra: PropTypes.node
}

export default PricingPage
