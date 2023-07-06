import * as React from "react"

import { BackgroundColor, HorizontalAlign } from "../utils"

import { StyledTitle } from "./Styles"

interface TitleProps {
  backgroundColor: BackgroundColor
  horizontalAlign: HorizontalAlign
  children: React.ReactNode
}

const Title = ({ backgroundColor, horizontalAlign, children }: TitleProps): JSX.Element => {
  return (
    <StyledTitle $backgroundColor={backgroundColor} $horizontalAlign={horizontalAlign}>
      {children}
    </StyledTitle>
  )
}

export default Title
