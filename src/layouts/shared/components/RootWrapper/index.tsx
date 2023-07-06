import * as React from "react"
import * as Sentry from "@sentry/react"
import { I18nextProvider } from "react-i18next"

import i18n from "@utils/i18n"
import { LayoutContextProvider } from "@layouts/shared/components/LayoutContext"
import ToastProvider from "@layouts/shared/components/Toast"

const RootWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Sentry.ErrorBoundary fallback={<>An error has occurred</>}>
      <I18nextProvider i18n={i18n}>
        <LayoutContextProvider>
          <ToastProvider>{children}</ToastProvider>
        </LayoutContextProvider>
      </I18nextProvider>
    </Sentry.ErrorBoundary>
  )
}

export default RootWrapper
