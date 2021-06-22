const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({ path: `.env.${activeEnv}` })

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true
  },
  siteMetadata: {
    title: 'HubRise',
    description: '',
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || '',
    contactMessageUrl: process.env.CONTACT_MESSAGE_URL || ''
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'source__src_images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'source__content',
        path: `${__dirname}/content`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 870,
              quality: 100,
              linkImagesToOriginal: false,
              srcSetBreakpoints: [435, 870, 1740]
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-104746398-1',
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ['production'].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-client-side-redirect',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@contexts': 'src/contexts',
          '@images': 'src/images',
          '@layouts': 'src/layouts',
          '@utils': 'src/utils'
        },
        extensions: []
      }
    }
  ]
}
