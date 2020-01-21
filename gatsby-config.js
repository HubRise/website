const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({ path: `.env.${activeEnv}` })

module.exports = {
  siteMetadata: {
    title: `HubRise`,
    description: ``,
    author: ``
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-104746398-1`,
        respectDNT: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              withWebp: true,
              tracedSVG: true
            }
          }
        ],
        plugins: [`gatsby-remark-images`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
