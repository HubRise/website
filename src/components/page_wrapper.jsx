import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import ContactForm from './forms/contact'
import Modal from '../components/modal'
import Layout from './layout'
import Seo from './seo'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { useLayoutContext } from '../context/layout'
import ToastProvider from './toast'

const PageWrapper = ({ element, props }) => {
  const siteMetadata = useStaticQuery(graphql`
    query recaptchaSiteKey {
      site {
        siteMetadata {
          recaptchaSiteKey
          contactMessageUrl
        }
      }
    }
  `).site.siteMetadata

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
          src={`https://www.google.com/recaptcha/api.js?render=${siteMetadata.recaptchaSiteKey}`}
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
          <ContactForm recaptchaSiteKey={siteMetadata.recaptchaSiteKey} contactMessageUrl={siteMetadata.contactMessageUrl} />
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
