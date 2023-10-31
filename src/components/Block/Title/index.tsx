import * as React from "react"

import { BackgroundColor, HorizontalAlign } from "../utils"

import { Anchor, StyledTitle } from "./Styles"

interface TitleProps {
  backgroundColor: BackgroundColor
  horizontalAlign: HorizontalAlign
  anchor?: string
  children: React.ReactNode
}

const Title = ({ backgroundColor, horizontalAlign, anchor, children }: TitleProps): JSX.Element => {
  return (
    <StyledTitle $backgroundColor={backgroundColor} $horizontalAlign={horizontalAlign} id={anchor}>
      {anchor ? <Anchor href={`#${anchor}`}>{children}</Anchor> : children}
    </StyledTitle>
  )
}

export default Title
