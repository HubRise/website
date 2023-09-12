import * as React from "react"

import { ContentImage } from "@utils/contentImage"

import { DocumentationContextProvider } from "./DocumentationContext"
import DocumentationSlideshow from "./DocumentationSlideshow"

interface DocumentationWrapperProps {
  contentImages: Array<ContentImage>
  title: string
  children: React.ReactNode
}

const DocumentationWrapper = ({ contentImages, title, children }: DocumentationWrapperProps): JSX.Element => {
  return (
    <DocumentationContextProvider>
      <DocumentationSlideshow contentImages={contentImages} title={title} />

      {children}
    </DocumentationContextProvider>
  )
}

export default DocumentationWrapper
