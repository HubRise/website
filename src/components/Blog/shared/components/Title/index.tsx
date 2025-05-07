import * as React from "react"

import { BlogFrontMatter } from "@utils/BlogIndexer/types"
import { text } from "@utils/misc"

import { StyledTitle } from "./Styles"

interface TitleProps {
  frontMatter: BlogFrontMatter
  className?: string
}

const Title = ({ frontMatter, className }: TitleProps): JSX.Element => {
  return <StyledTitle className={className}>{text(frontMatter.title)}</StyledTitle>
}

export default Title
