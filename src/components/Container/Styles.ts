import styled from "styled-components"

import { breakpoints, colors } from "@utils/styles"

import { ContainerBgColor, linkContainerBgColor, ContainerVerticalPadding, linkContainerVerticalPadding } from "./utils"

export const ContainerStyles = styled.div<{
  $bgColor: ContainerBgColor
  $vPadding: ContainerVerticalPadding
  $textCentered: boolean
}>`
  background-color: ${({ $bgColor }) => linkContainerBgColor($bgColor)};
  padding: 3.875rem 1rem;
  color: ${({ $bgColor }) => ($bgColor === "green" ? `${colors.white}` : "inherit")};
  text-align: ${({ $textCentered }) => ($textCentered ? "center" : "initial")};
  overflow: hidden;

  @media (min-width: ${breakpoints.large}) {
    padding: ${({ $vPadding }) => linkContainerVerticalPadding($vPadding)};
  }
`
