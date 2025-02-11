import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

import { ButtonType, linkButtonBgColor, linkButtonColor } from "./utils"

export const ButtonStyles = styled(Link)<{ $type: ButtonType }>`
  ${mixin.centerElement}
  width: fit-content;
  height: 3rem;
  line-height: 3rem;
  background-color: ${({ $type }) => linkButtonBgColor($type)};
  color: ${({ $type }) => linkButtonColor($type)};
  font-size: ${fontSizes._16};
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  margin-top: 2rem;
  transition: all 0.5s ease;
  white-space: nowrap;

  & > span {
    margin-left: 0.375rem;
  }

  &:hover {
    background-color: ${colors.textDarkest};
    color: ${colors.white};
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0 1.125rem;

    & > span {
      margin-left: 0.625rem;
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    height: 3.375rem;
    line-height: 3.375rem;
    font-size: ${fontSizes._20};
  }
`
