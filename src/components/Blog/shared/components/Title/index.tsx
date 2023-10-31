import * as React from "react"

import { BlogFrontMatter } from "@utils/BlogIndexer/types"

import { StyledTitle } from "./Styles"

interface TitleProps {
  frontMatter: BlogFrontMatter
  className?: string
}

const Title = ({ frontMatter, className }: TitleProps): JSX.Element => {
  return <StyledTitle className={className}>{frontMatter.title}</StyledTitle>
}

export default Title
