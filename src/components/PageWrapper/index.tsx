import * as React from 'react'
import { WrapPageElementBrowserArgs } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Modal from '@components/Modal'
import Layout from '@components/Layout'
import ContactForm from '@components/ContactForm'
import { useLayoutContext } from '@contexts/layout'
import { RootContext } from '@utils/context'

interface PageWrapperProps {
  children: React.ReactNode
  props: WrapPageElementBrowserArgs['props']
}

const PageWrapper = ({ children, props }: PageWrapperProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const { siteMetadata, forms } = useLayoutContext()

  const pageContext = (props.pageContext as Record<
    keyof RootContext,
    string
  >) as RootContext

  const isSSR = typeof window === 'undefined'
  if (isSSR) i18n.changeLanguage(pageContext.localeCode)

  return (
    <>
      <Helmet>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${siteMetadata.recaptchaSiteKey}`}
        />
      </Helmet>

      <Layout pageContext={pageContext}>{children}</Layout>

      {forms.contact.isVisible && (
        <Modal
          title={t(`forms.contact.modal_title`)}
          onClose={forms.contact.toggle}
        >
          <ContactForm
            recaptchaSiteKey={siteMetadata.recaptchaSiteKey}
            contactMessageUrl={siteMetadata.contactMessageUrl}
          />
        </Modal>
      )}
    </>
  )
}

export default PageWrapper
