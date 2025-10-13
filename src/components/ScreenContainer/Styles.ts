import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizes, lineHeights, mixin } from "@utils/styles"

import {
  ScreenContainerBgColor,
  linkContainerBgColor,
  ScreenContainerVerticalPadding,
  linkContainerVerticalPadding,
} from "./utils"

export const Container = styled.div<{
  $bgColor: ScreenContainerBgColor
  $verticalPadding: ScreenContainerVerticalPadding
  $textCentered: boolean
  $overflowVisible: boolean
}>`
  background-color: ${({ $bgColor }) => linkContainerBgColor($bgColor)};
  padding: 3.5rem 1rem;
  color: ${({ $bgColor }) => ($bgColor === "green" ? `${colors.white}` : "inherit")};
  text-align: ${({ $textCentered }) => ($textCentered ? "center" : "initial")};
  overflow: ${({ $overflowVisible }) => ($overflowVisible ? "visible" : "hidden")};

  @media (min-width: ${breakpoints.large}) {
    padding: ${({ $verticalPadding }) => linkContainerVerticalPadding($verticalPadding)};
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
  font-size: ${fontSizes._32};
  line-height: ${lineHeights.compact};
  font-weight: 600;
  color: ${({ $bgColor }) => ($bgColor === "green" ? `${colors.white}` : `${colors.textDarkest}`)};
  text-align: center;
`

export const Description = styled.div`
  ${mixin.responsiveText};
  text-align: center;
  margin: 1.25rem auto 0;
`
