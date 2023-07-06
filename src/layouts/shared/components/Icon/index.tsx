import * as React from "react"

import { StyledIcon } from "./Styles"
import type { StyledIconProps } from "./Styles"

// See available codes on https://fonts.google.com/icons
export type IconCode =
  | "chevron_left"
  | "chevron_right"
  | "close"
  | "done"
  | "error"
  | "expand_more"
  | "expand_less"
  | "navigate_before"

export type IconProps = StyledIconProps & {
  code: IconCode
  onClick?: () => void
  className?: string
  testId?: string
}

const Icon = React.forwardRef(
  (
    { code, testId = `icon:${code}`, ...otherProps }: IconProps,
    ref: React.ForwardedRef<HTMLSpanElement>,
  ): JSX.Element => (
    <StyledIcon data-testid={testId} {...otherProps} ref={ref}>
      {code}
    </StyledIcon>
  ),
)

Icon.displayName = "Icon"

export default Icon
