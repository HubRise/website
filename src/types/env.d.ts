declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    WAIT_ON_TIMEOUT?: number
    SENTRY_DSN?: string
    NEXT_PUBLIC_SENTRY_DSN?: string
    NEXT_PUBLIC_INTERACTIVE_DEV_MODE?: string
    SENDGRID_USERNAME: string
    SENDGRID_PASSWORD: string
    CONTACT_EMAIL: string
    RECAPTCHA_SECRET_KEY: string
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string
  }
}
