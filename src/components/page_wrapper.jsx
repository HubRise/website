import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import ContactForm from './forms/contact'
import Modal from '../components/modal'
import Layout from './layout'
import Seo from './seo'

import { useLayoutContext } from '../context/layout'

const PageWrapper = ({ element, props }) => {
  const { forms } = useLayoutContext()
  const { t, i18n } = useTranslation()
  const { pageContext } = props

  const isSSR = typeof window === 'undefined'
  if (isSSR) i18n.changeLanguage(pageContext.lang)

  const { meta } = pageContext

  return (
    <>
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
    </>
  )
}

PageWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired
}

export default PageWrapper
