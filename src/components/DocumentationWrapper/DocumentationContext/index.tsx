import * as React from "react"

export interface DocumentationContextInterface {
  slideshow: {
    currentImageSrc: string | null
    setCurrentImageSrc: (src: string | null) => void
  }
}

const DocumentationContext = React.createContext<DocumentationContextInterface>({} as DocumentationContextInterface)

const DocumentationContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [currentImageSrc, setCurrentImageSrc] = React.useState<string | null>(null)

  return (
    <DocumentationContext.Provider
      value={{
        slideshow: {
          currentImageSrc,
          setCurrentImageSrc,
        },
      }}
    >
      {children}
    </DocumentationContext.Provider>
  )
}

function useDocumentationContext(): DocumentationContextInterface {
  const context = React.useContext(DocumentationContext)

  if (!context) {
    throw new Error(`useDocumentationContext must be used within DocumentationContextProvider`)
  }

  return context
}

export { DocumentationContextProvider, useDocumentationContext }
