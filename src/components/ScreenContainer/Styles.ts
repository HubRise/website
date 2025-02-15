import styled from "styled-components"

import { breakpoints, colors, fontSizes } from "@utils/styles"

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

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 80rem;
  }
`

export const Title = styled.h2`
  font-size: ${fontSizes._32};
  line-height: 2.5rem;
  font-weight: 600;
  color: ${colors.textDarkest};
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
`

export const Description = styled.div`
  margin: 1.25rem auto 0;

  p {
    font-size: ${fontSizes._16};
    line-height: 1.5rem;
    text-align: center;

    @media (min-width: ${breakpoints.large}) {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }

    @media (min-width: ${breakpoints.biggest}) {
      font-size: ${fontSizes._24};
      line-height: 2rem;
    }
  }
`
