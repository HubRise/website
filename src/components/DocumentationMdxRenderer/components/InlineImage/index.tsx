"use client"

import * as React from "react"

import { StyledImage } from "./Styles"

interface InlineImageProps {
  children: React.ReactNode
  width?: string
  height?: string
}

const InlineImage = ({ children, width, height }: InlineImageProps): JSX.Element => {
  return (
    <StyledImage width={width} height={height}>
      {children}
    </StyledImage>
  )
}

export default InlineImage
