import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import ContactForm from './forms/contact'
import Modal from '../components/modal'
import Layout from './layout'
import Seo from './seo'
import { Helmet } from 'react-helmet'

import { useLayoutContext } from '../context/layout'
import ToastProvider from './toast'

const PageWrapper = ({ element, props }) => {
  const { forms } = useLayoutContext()
  const { t, i18n } = useTranslation()
  const { pageContext } = props

  const isSSR = typeof window === 'undefined'
  if (isSSR) i18n.changeLanguage(pageContext.lang)

  const { meta } = pageContext

  return (
    <ToastProvider>
      <Helmet>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`}
        />
      </Helmet>
      <Seo
        lang={i18n.language}
        title={meta ? meta.title : ''}
        description={meta ? meta.description : ''}
      />
      <Layout {...props}>{element}</Layout>
      {forms.contact.isVisible && (
        <Modal
          title={t(`forms.contact.modal_title`)}
          onClose={forms.contact.toggle}
        >
          <ContactForm />
        </Modal>
      )}
    </ToastProvider>
  )
}

PageWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired
}

export default PageWrapper
