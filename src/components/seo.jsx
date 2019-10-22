import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import appleTouchIcon from '../images/favicons/apple-touch-icon.png'
import safariPinnedTab from '../images/favicons/safari-pinned-tab.svg'
import favicon32 from '../images/favicons/favicon-32x32.png'
import favicon16 from '../images/favicons/favicon-16x16.png'

function SEO ({ description, lang, meta, title }) {
  const { site } = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const pageTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={pageTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: pageTitle
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
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: pageTitle
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
          name: `author`,
          content: site.siteMetadata.author
        },
        {
          name: `copyright`,
          content: `(c)`
        }
      ].concat(meta)}
    >
      <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
      <link rel='mask-icon' href={safariPinnedTab} color='#5bbad5' />
      <link rel='icon' type='image/png' sizes='32x32' href={favicon32} />
      <link rel='icon' type='image/png' sizes='32x32' href={favicon16} />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
  title: `HubRise`
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default SEO
