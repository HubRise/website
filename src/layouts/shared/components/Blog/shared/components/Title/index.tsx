import * as React from "react"

import { StyledTitle } from "./Styles"

import { BlogNode } from "@layouts/shared/components/Blog/shared/interface"

interface TitleProps {
  frontmatter: BlogNode["frontmatter"]
  className?: string
}

const Title = ({ frontmatter, className }: TitleProps): JSX.Element => {
  return <StyledTitle className={className}>{frontmatter.title}</StyledTitle>
}

export default Title
