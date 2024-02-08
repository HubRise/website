"use client"

import * as React from "react"
import { ImgHTMLAttributes } from "react"

import { useDocumentationContext } from "@components/DocumentationWrapper/DocumentationContext"
import imageSizes from "@utils/imageSizes"

import { StyledImage } from "./styles"

export type BlurDataURL = {
  blurDataURL?: string
}

const Img = ({
  src,
  alt,
  width,
  height,
  blurDataURL,
}: ImgHTMLAttributes<HTMLImageElement> & BlurDataURL): JSX.Element | null => {
  if (!width || !height) throw new Error(`"width" and "height" properties required for image with src="${src}"`)

  const {
    slideshow: { setCurrentImageSrc },
  } = useDocumentationContext()

  const responsiveSize = Math.min(Number(width), imageSizes.documentation)

  return (
    <StyledImage
      src={src!}
      alt={alt ?? ""}
      width={Number(width)}
      height={Number(height)}
      sizes={`${responsiveSize}px`}
      onClick={() => setCurrentImageSrc(src!)}
      blurDataURL={blurDataURL!}
      placeholder="blur"
    />
  )
}

export default Img
