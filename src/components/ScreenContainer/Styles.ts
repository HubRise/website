import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

import {
  ScreenContainerBgColor,
  linkContainerBgColor,
  ScreenContainerVerticalPadding,
  linkContainerVerticalPadding,
} from "./utils"

export const Container = styled.div<{
  $bgColor: ScreenContainerBgColor
  $vPadding: ScreenContainerVerticalPadding
  $textCentered: boolean
}>`
  background-color: ${({ $bgColor }) => linkContainerBgColor($bgColor)};
  padding: 3.5rem 1rem;
  color: ${({ $bgColor }) => ($bgColor === "green" ? `${colors.white}` : "inherit")};
  text-align: ${({ $textCentered }) => ($textCentered ? "center" : "initial")};
  overflow: hidden;

  @media (min-width: ${breakpoints.large}) {
    padding: ${({ $vPadding }) => linkContainerVerticalPadding($vPadding)};
  }
`

export const HeaderWrapper = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  position: relative;

  ${StyledButton} {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 80rem;
  }
`

export const Title = styled.h2<{ $bgColor: ScreenContainerBgColor }>`
  ${fontSizeMixins.fontSizeDisplaySm}
  font-weight: 600;
  color: ${({ $bgColor }) => ($bgColor === "green" ? `${colors.white}` : `${colors.textDarkest}`)};
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplayMd}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplayLg}
  }
`

export const Description = styled.div`
  ${mixin.description}
  text-align: center;
  margin: 1.25rem auto 0;
`
