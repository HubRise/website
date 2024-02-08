import styled from "styled-components"

import { iconSizes } from "@utils/styles"

export interface StyledIconProps {
  size?: number
  left?: number
  top?: number
  color?: string
}

export const StyledIcon = styled.span<StyledIconProps>`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: ${({ size }) => `${size === undefined ? iconSizes._14 : size}px`};
  ${({ color }) => (color === undefined ? "" : `color: ${color}`)};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  ${({ left, top }) =>
    left === undefined && top === undefined
      ? ""
      : `transform: translate(${left === undefined ? 0 : left}px, ${top === undefined ? 0 : top}px);`}

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: "liga";
`
