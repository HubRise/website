import * as React from "react"

import { text } from "@utils/misc"

import { StyledContainer } from "./Styles"

interface DocumentationContainerProps {
  title?: string
  children?: React.ReactNode
}

const DocumentationContainer = ({ title, children }: DocumentationContainerProps): JSX.Element => {
  return (
    <StyledContainer>
      {title && <h1 id={title.replace(/\s+/g, "-").toLocaleLowerCase()}>{text(title)}</h1>}
      {children}
    </StyledContainer>
  )
}

export default DocumentationContainer
