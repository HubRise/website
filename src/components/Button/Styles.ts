import Link from "next/link"
import styled, { css } from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

import { ButtonType, linkButtonBgColor, linkButtonColor } from "./utils"

export const StyledButton = styled(Link)<{ $type: ButtonType }>`
  ${mixin.centerElement}
  width: fit-content;
  height: ${({ $type }) => ($type === "link" ? "auto" : "3rem")};
  line-height: ${({ $type }) => ($type === "link" ? "normal" : "3rem")};
  background-color: ${({ $type }) => linkButtonBgColor($type)};
  color: ${({ $type }) => linkButtonColor($type)};
  font-size: ${fontSizes._16};
  font-weight: 600;
  border-radius: 0.5rem;
  padding: ${({ $type }) => ($type === "link" ? "0" : "0 0.5rem")};
  margin-top: 2rem;
  transition: all 0.5s ease;
  white-space: nowrap;

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
    padding: ${({ $type }) => ($type === "link" ? "0" : "0 1.125rem")};

    ${StyledIcon} {
      margin-left: 0.625rem;
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    height: ${({ $type }) => ($type === "link" ? "auto" : "3.375rem")};
    line-height: ${({ $type }) => ($type === "link" ? "normal" : "3.375rem")};
    font-size: ${fontSizes._20};
  }
`
