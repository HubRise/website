import * as React from "react"

import { Language } from "@utils/locales"

export interface LayoutContextInterface {
  forms: {
    contact: {
      isVisible: boolean
      toggle: () => void
    }
  }
  language: Language
}

const LayoutContext = React.createContext<LayoutContextInterface>({} as LayoutContextInterface)

interface LayoutContextProviderProps {
  language: Language
  children: React.ReactNode
}

const LayoutContextProvider = ({ language, children }: LayoutContextProviderProps): JSX.Element => {
  const [isContactVisible, setContactVisibility] = React.useState(false)

  return (
    <LayoutContext.Provider
      value={{
        forms: {
          contact: {
            isVisible: isContactVisible,
            toggle: () => setContactVisibility(!isContactVisible),
          },
        },
        language,
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
