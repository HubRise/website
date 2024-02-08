"use client"

import Script from "next/script"
import * as React from "react"

import CommonClientStyles from "@components/CommonClientStyles"
import ContentHotReload from "@components/ContentHotReload"
import { LayoutContextProvider } from "@components/LayoutContext"
import LayoutForms from "@components/LayoutForms"
import ToastProvider from "@components/Toast"
import { Language } from "@utils/locales"

import { Main } from "./Styles"

interface LayoutProps {
  language: Language
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

const Layout = ({ language, header, footer, children }: LayoutProps): JSX.Element => {
  return (
    <LayoutContextProvider language={language}>
      <ToastProvider>
        {process.env.NEXT_PUBLIC_INTERACTIVE_DEV_MODE === "true" && <ContentHotReload />}

        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          />
        )}

        <CommonClientStyles />

        <KeepInFirstPositionImportant />

        {header}
        <Main>{children}</Main>
        {footer}

        <LayoutForms />
      </ToastProvider>
    </LayoutContextProvider>
  )
}

export default Layout

/**
 * The presence of a sticky header as the first element in the DOM prevents the auto-scroll behaviour.
 * This means that the page is not scrolled up on page change.
 * Putting an empty static element before the header fixes the issue.
 * See https://github.com/vercel/next.js/pull/53873
 */
const KeepInFirstPositionImportant = (): JSX.Element => <div />
