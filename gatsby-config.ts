import { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    title: "HubRise",
    description: "",
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || "",
    contactMessageUrl: process.env.CONTACT_MESSAGE_URL || "",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "source__src_images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "source__content",
        path: `${__dirname}/content`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Used for gatsbyImageData and StaticImage
        defaults: {
          formats: ["auto"], // Defaults to ["auto", "webp"] which creates extra webp files for png and jpg images
          placeholder: "none",
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        mdxOptions: {
          remarkPlugins: [require("remark-gfm")],
        },
        gatsbyRemarkPlugins: [
          {
            // Only applies to images in Markdown files.
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 870,
              linkImagesToOriginal: true,
              srcSetBreakpoints: [870, 1740],
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics", // Universal Analytics (old tool)
      options: {
        trackingId: "UA-104746398-1",
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag", // Google Analytics 4 (new tool)
      options: {
        trackingIds: ["G-T7XGRWR3SN"],
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-client-side-redirect",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@assets": "src/assets",
          "@layouts": "src/layouts",
          "@utils": "src/utils",
        },
        extensions: [],
      },
    },
    "gatsby-plugin-styled-components",
  ],
}

export default config
