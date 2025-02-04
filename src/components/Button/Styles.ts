import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizes } from "@utils/styles"

import { ButtonType, linklinkButtonBgColor, linklinkButtonColor } from "./utils"

export const ButtonStyles = styled(Link)<{ $type: ButtonType }>`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 3.375rem;
  line-height: 3.375rem;
  background-color: ${colors.white};
  background-color: ${({ $type }) => linklinkButtonBgColor($type)};
  color: ${({ $type }) => linklinkButtonColor($type)};
  font-size: ${fontSizes._20};
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0 1.125rem;
  margin-top: 2rem;
  transition: all 0.5s ease;

  & > span {
    margin-left: 0.625rem;
  }

  @media (max-width: ${breakpoints.biggest}) {
    height: 3rem;
    line-height: 3rem;
    font-size: ${fontSizes._16};
  }

  &:hover {
    background-color: ${colors.textDarkest};
    color: ${colors.white};
  }
`
