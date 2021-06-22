import * as React from 'react'
import Helmet from 'react-helmet'

import AppleTouchIcon from '@images/favicons/apple-touch-icon.png'
import SafariPinnedTab from '@images/favicons/safari-pinned-tab.svg'
import Favicon32 from '@images/favicons/favicon-32x32.png'
import Favicon16 from '@images/favicons/favicon-16x16.png'
import { LocaleCode } from '@utils/locales'
import { useLayoutContext } from '@contexts/layout'
import { Meta } from './interface'

interface SEOProps {
  localeCode: LocaleCode
  meta?: Meta
}

const SEO = ({ localeCode, meta }: SEOProps): JSX.Element => {
  const siteMetadata = useLayoutContext().siteMetadata

  const metaTitle = meta?.title || siteMetadata.title
  const metaDescription = meta?.description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        localeCode
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: ``
        },
        {
          name: `copyright`,
          content: `(c)`
        }
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="mask-icon" href={SafariPinnedTab} color="#5bbad5" />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon16} />
    </Helmet>
  )
}

export default SEO

export type { Meta } from './interface'
