const fs = require("fs").promises
const { join } = require("path")

const { withSentryConfig } = require("@sentry/nextjs")
const yaml = require("yaml")

// Check the presence of required env variables.
const requiredEnvVars = ["NEXT_PUBLIC_CONTACT_MESSAGE_URL"]
const missingVars = requiredEnvVars.filter((key) => !(key in process.env))
if (missingVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingVars.join(", ")}`)
}

/** @type {import('next').NextConfig} */
let finalConfig = {}

finalConfig = {
  compiler: {
    styledComponents: {}, // The presence of this empty object makes SC use human-readable class names in dev mode.
  },
  redirects: async () => {
    const yamlFile = join(process.cwd(), "content", "redirects.yaml")
    const data = await fs.readFile(yamlFile, "utf8")
    const entries = yaml.parse(data)
    return entries.map(({ fromPath, toPath }) => ({
      source: fromPath,
      destination: toPath,
      permanent: true,
    }))
  },
  images: {
    // Keep these values in sync with `src/utils/imageSizes.ts`
    imageSizes: [320, 435, 870],
    // The smallest device size must be larger than all image sizes above.
    deviceSizes: [1200, 2048, 3840],
  }
}

finalConfig = withSentryConfig(
  finalConfig,
  {
    // For all available options, see https://github.com/getsentry/sentry-webpack-plugin#options
    // Suppresses source map uploading logs during build
    silent: true,
    org: "hubrise",
    project: "website",
  },
  {
    // For all available options, see https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,
    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",
    // Hides source maps from generated client bundles
    hideSourceMaps: true,
    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
)

module.exports = finalConfig
