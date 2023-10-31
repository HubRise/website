declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    WAIT_ON_TIMEOUT?: number
    SENTRY_DSN?: string
    NEXT_PUBLIC_SENTRY_DSN?: string
    NEXT_PUBLIC_INTERACTIVE_DEV_MODE?: string
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY?: string
    NEXT_PUBLIC_CONTACT_MESSAGE_URL: string
  }
}
