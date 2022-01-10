import * as React from "react"

import { useLayoutContextData, SiteMetadata } from "./graphql"

export interface LayoutContextInterface {
  siteMetadata: SiteMetadata
  forms: {
    contact: {
      isVisible: boolean
      toggle: () => void
    }
    suggestApp: {
      isVisible: boolean
      toggle: () => void
    }
  }
}

const LayoutContext = React.createContext<LayoutContextInterface>({} as LayoutContextInterface)

interface LayoutContextProviderProps {
  children: React.ReactNode
}

function LayoutContextProvider({ children }: LayoutContextProviderProps): JSX.Element {
  const [isContactVisible, setContactVisibility] = React.useState(false)
  const [isSuggestAppVisible, setSuggestAppVisibility] = React.useState(false)

  const siteMetadata = useLayoutContextData().site.siteMetadata

  return (
    <LayoutContext.Provider
      value={{
        siteMetadata,
        forms: {
          contact: {
            isVisible: isContactVisible,
            toggle: () => setContactVisibility(!isContactVisible),
          },
          suggestApp: {
            isVisible: isSuggestAppVisible,
            toggle: () => setSuggestAppVisibility(!isSuggestAppVisible),
          },
        },
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayoutContext(): LayoutContextInterface {
  const context = React.useContext(LayoutContext)

  if (!context) {
    throw new Error(`useLayoutContext must be used within LayoutContextProvider`)
  }

  return context
}

export { LayoutContextProvider, useLayoutContext }
export type { SiteMetadata } from "./graphql"
