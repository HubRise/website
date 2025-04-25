"use client"

import NextLink from "next/link"
import { AnchorHTMLAttributes } from "react"

const A = ({ href, ...otherProps }: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element | null => {
  if (href?.startsWith("/") || href?.startsWith("#")) {
    // Internal link, use Next router.
    return <NextLink href={href} {...otherProps} />
  } else {
    // External link
    return <a href={href} {...otherProps} target="_blank" rel="noopener noreferrer" />
  }
}

export default A
