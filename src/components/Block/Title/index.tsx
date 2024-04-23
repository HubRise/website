import * as React from "react"

import { text } from "@utils/misc"

import { BackgroundColor, HorizontalAlign } from "../utils"

import { Anchor, StyledTitle } from "./Styles"

interface TitleProps {
  backgroundColor: BackgroundColor
  horizontalAlign: HorizontalAlign
  anchor?: string
  children: string
}

const Title = ({ backgroundColor, horizontalAlign, anchor, children }: TitleProps): JSX.Element => {
  const title = text(children)
  return (
    <StyledTitle $backgroundColor={backgroundColor} $horizontalAlign={horizontalAlign} id={anchor}>
      {anchor ? <Anchor href={`#${anchor}`}>{title}</Anchor> : title}
    </StyledTitle>
  )
}

export default Title
