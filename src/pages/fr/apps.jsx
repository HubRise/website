import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import Link from '../../components/link'
import Modal from '../../components/modal'
import SuggestAppForm from '../../components/forms/suggest_app'

import { useLayoutContext } from '../../context/layout'

import { generateKey } from '../../components/utils'

import jdcLogo from '../../images/apps/jdc.png'
import orderLordLogo from '../../images/apps/orderlord.png'
import nestorLogo from '../../images/apps/nestor.png'
import myOrderBoxLogo from '../../images/apps/myorderbox.png'
import cashPadLogo from '../../images/apps/cashpad.png'
import livePepperLogo from '../../images/apps/livepepper.png'
import acrelecLogo from '../../images/apps/acrelec.png'
import alloRestoLogo from '../../images/apps/alloresto.png'
import nextMenuLogo from '../../images/apps/nextmenu.png'
import yProximiteLogo from '../../images/apps/yproximite.png'
import mailChimpLogo from '../../images/apps/mailchimp.png'

const Intro = () => {
  const { forms } = useLayoutContext()

  return (
    <section className='section'>
      <div className='section__in section__in_padding'>
        <h3 className='section__title'>
          <Trans i18nKey='pages.apps.hero.title'>
            text <br />
            text
          </Trans>
        </h3>
        <div className='section__description'>
          <p>
            <Trans i18nKey='pages.apps.hero.description.contact'>
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
          <p>
            <Trans i18nKey='pages.apps.hero.description.developers'>
              text
              <Link
                className='section__description-link section__description-link_black'
                to='/developpeurs'
              >
                text
              </Link>
            </Trans>
          </p>
        </div>
      </div>
    </section>
  )
}

const sections = [
  {
    id: `cashier`,
    blocks: [
      {
        id: `jdc`,
        to: `https://www.jdc.fr/caisse-enregistreuse/`,
        domain: `jdc.fr`,
        logo: jdcLogo
      },
      {
        id: `orderlord`,
        to: `https://www.orderlord.com`,
        domain: `orderlord.com`,
        logo: orderLordLogo
      },
      {
        id: `nestor`,
        to: `http://www.logiciel-de-livraison.com/`,
        domain: `logiciel-de-livraison.com`,
        logo: nestorLogo
      },
      {
        id: `my_order_box`,
        to: `http://www.myorderboxhq.com`,
        domain: `myorderboxhq.com`,
        logo: myOrderBoxLogo
      },
      {
        id: `cashpad`,
        to: `https://www.cashpad.fr`,
        domain: `cashpad.fr`,
        logo: cashPadLogo
      }
    ],
    hasSuggestApp: true
  },
  {
    id: `order_online`,
    blocks: [
      {
        id: `livepepper`,
        to: `http://www.livepepper.fr/`,
        domain: `livepepper.fr`,
        logo: livePepperLogo
      },
      {
        id: `acrelec`,
        to: `http://www.acrelec.fr/`,
        domain: `acrelec.fr`,
        logo: acrelecLogo
      },
      {
        id: `alloresto`,
        to: `https://www.just-eat.fr/`,
        domain: `just-eat.fr`,
        logo: alloRestoLogo
      },
      {
        id: `nextmenu`,
        to: `https://www.nextmenu.com/`,
        domain: `nextmenu.com`,
        logo: nextMenuLogo
      },
      {
        id: `yproximite`,
        to: `http://www.y-proximite.fr/`,
        domain: `y-proximite.fr`,
        logo: yProximiteLogo
      }
    ]
  },
  {
    id: `other`,
    blocks: [
      {
        id: `orderlord`,
        to: `https://www.orderlord.com`,
        domain: `orderlord.com`,
        logo: orderLordLogo
      },
      {
        id: `mailchimp`,
        to: `https://mailchimp.com/`,
        domain: `mailchimp.com`,
        logo: mailChimpLogo
      }
    ]
  }
]

const AppSection = ({ id, blocks, hasSuggestApp }) => {
  const { t } = useTranslation()
  const prefix = `pages.apps.sections.${id}`

  return (
    <section className='section'>
      <div className='section__in section__in_padding section__in_reverse'>
        <h3 className='section__title section__title_align-left'>
          {t(`${prefix}.title`)}
        </h3>
        <ul className='apps'>
          {blocks.map(
            ({ id, to, domain, logo }, idx) => {
              const {
                title,
                description,
                additional_info: additionalInfo
              } = t(`${prefix}.${id}`)
              return (
                <li key={generateKey(title, idx)} className='app'>
                  <div className='app__title'>
                    {title}
                  </div>
                  <Link
                    to={to}
                    className='app__box'
                  >
                    <img
                      className='app__box-image'
                      src={logo}
                      alt={title}
                    />
                  </Link>
                  <div className='app__description'>
                    {description}
                    {additionalInfo && (
                      <p style={{ fontSize: `0.9rem` }}>
                        <i>{additionalInfo}</i>
                      </p>
                    )}
                  </div>
                  <div className='app__more'>
                    <Link
                      to={to}
                      className='app__more-link'
                    >
                      {domain}
                    </Link>
                  </div>
                </li>
              )
            })}
          {hasSuggestApp && <SuggestApp />}
        </ul>
      </div>
    </section>
  )
}

const SuggestApp = () => {
  const { forms } = useLayoutContext()
  const { t } = useTranslation()
  const prefix = `pages.apps.sections.shared.suggest_app`

  return (
    <li className='app'>
      <div className='app__title'>
        {t(`${prefix}.title`)}
      </div>
      <button
        className='app__box app__box_suggest-app'
        data-open='suggest-app'
        aria-controls='suggest-app'
        aria-haspopup='true'
        tabIndex='0'
        onClick={forms.suggestApp.toggle}
      >
        <div className='app__box-image app__box-image_suggest-app'>
          <span>?</span>
        </div>
      </button>
      <div className='app__description'>
        {t(`${prefix}.description`)}
      </div>
      <div className='app__more'>
        <button
          className='app__more-link'
          data-open='suggest-app'
          aria-controls='suggest-app'
          aria-haspopup='true'
          tabIndex='0'
          onClick={forms.suggestApp.toggle}
        >
          {t(`${prefix}.button`)}
        </button>
      </div>
    </li>
  )
}

const ForDevelopers = () => {
  const { t } = useTranslation()

  return (
    <section className='section section_full-width section_padding'>
      <div className='section__in section__in section__in_green section__in_padding'>
        <h3 className='section__title section__title_white'>
          {t(`pages.apps.developers.title`)}
        </h3>
        <Trans i18nKey='pages.apps.developers.description'>
          <p className='section__description_white'>
            text
          </p>
          <p className='section__description_white'>
            text <br />
            text
          </p>
        </Trans>
      </div>
    </section>
  )
}

const AppsPage = () => {
  const { forms } = useLayoutContext()
  const { t } = useTranslation()

  return (
    <>
      <Intro />
      {sections.map((sectionProps, idx) => (
        <AppSection
          key={generateKey(sectionProps.title, idx)}
          {...sectionProps}
        />
      ))}
      <ForDevelopers />
      {forms.suggestApp.isVisible && (
        <Modal
          title={t(`forms.suggest_app.modal.title`)}
          description={t(`forms.suggest_app.modal.description`)}
          onClose={forms.suggestApp.toggle}
        >
          <SuggestAppForm />
        </Modal>
      )}
    </>
  )
}

export default AppsPage
