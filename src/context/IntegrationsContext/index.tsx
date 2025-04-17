import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

export interface IntegrationsContextInterface {
  isIntegrationsNavSticky: boolean
  setIsIntegrationsNavSticky: Dispatch<SetStateAction<boolean>>
}

export const IntegrationsContext = createContext<IntegrationsContextInterface>({} as IntegrationsContextInterface)

export const useIntegrationsContext = () => {
  return useContext(IntegrationsContext)
}

export const IntegrationsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isIntegrationsNavSticky, setIsIntegrationsNavSticky] = useState<boolean>(false)

  return (
    <IntegrationsContext.Provider value={{ isIntegrationsNavSticky, setIsIntegrationsNavSticky }}>
      {children}
    </IntegrationsContext.Provider>
  )
}
