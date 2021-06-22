import * as React from 'react'
import { useTranslation } from 'react-i18next'

import Image404 from '@images/404.png'
import SEO, { Meta } from '@components/Seo'
import Link from '@components/Link'
import { RootContext } from '@utils/context'

interface NotFoundProps {
  pageContext: RootContext
}

const NotFound = ({ pageContext }: NotFoundProps): JSX.Element => {
  const { t } = useTranslation()
  const meta: Meta = { title: t('layout.404.meta.title') }

  return (
    <>
      <SEO localeCode={pageContext.localeCode} meta={meta} />

      <div className="page-404">
        <h1 className="page-404__title">{t('layout.404.title')}</h1>
        <Link to="/" className="page-404__link">
          {t('layout.404.text_link')}
        </Link>

        <img className="page-404__image" alt="404 not found" src={Image404} />
      </div>
    </>
  )
}

export default NotFound
