import Link from "next/link"
import styled, { css } from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

import { ButtonType, linkButtonBgColor, linkButtonColor } from "./utils"

export const buttonStyles = css`
  ${mixin.centerElement};
  width: fit-content;
  font-size: ${fontSizes._16};
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  white-space: nowrap;
`

export const StyledButton = styled(Link)<{ $type: ButtonType }>`
  ${buttonStyles};
  height: ${({ $type }) => ($type === "link" ? "auto" : "3rem")};
  line-height: ${({ $type }) => ($type === "link" ? "normal" : "3rem")};
  background-color: ${({ $type }) => linkButtonBgColor($type)};
  color: ${({ $type }) => linkButtonColor($type)};
  padding: ${({ $type }) => ($type === "link" ? "0" : "0 1.125rem")};
  margin-top: 2rem;

  ${StyledIcon} {
    margin-left: 0.375rem;
  }

  ${({ $type }) =>
    $type !== "link" &&
    css`
      &:hover {
        background-color: ${colors.textDarkest};
        color: ${colors.white};
      }
    `}

  @media (min-width: ${breakpoints.large}) {
    ${StyledIcon} {
      margin-left: 0.625rem;
    }
  }
`
