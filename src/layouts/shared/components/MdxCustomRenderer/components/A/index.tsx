import * as React from "react"
import { AnchorHTMLAttributes } from "react"

import Link from "@layouts/shared/components/Link"

const A = ({ href, ...otherProps }: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element | null =>
  href ? <Link to={href} {...otherProps} /> : null

export default A
