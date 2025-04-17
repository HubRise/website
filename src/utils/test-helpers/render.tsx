import { render, RenderOptions } from "@testing-library/react"
import React from "react"

import { LayoutContextProvider } from "@components/LayoutContext"
import ToastProvider from "@components/Toast"
import { IntegrationsContextProvider } from "context/IntegrationsContext"

export const generateAppWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <LayoutContextProvider language="en">
      <ToastProvider>
        <IntegrationsContextProvider>{children}</IntegrationsContextProvider>
      </ToastProvider>
    </LayoutContextProvider>
  )
}

const renderComponent = (ui: JSX.Element, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: generateAppWrapper, ...options })

export * from "@testing-library/react"
export { renderComponent as render }
