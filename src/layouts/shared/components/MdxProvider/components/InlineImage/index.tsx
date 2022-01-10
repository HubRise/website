import * as React from "react"

import { Image } from "./Styles"

interface InlineImageProps {
  children: React.ReactNode
  width?: string
  height?: string
}

const InlineImage = ({ children, width, height }: InlineImageProps): JSX.Element => {
  const convertToNumber = (value: string | undefined): number | undefined => {
    const num = Number(value)
    return Number.isNaN(num) ? undefined : num
  }
  return (
    <Image
      data-width={width}
      data-height={height}
      style={{
        width: convertToNumber(width),
        height: convertToNumber(height),
      }}
    >
      {children}
    </Image>
  )
}

export default InlineImage
