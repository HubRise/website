import styled from "styled-components"

import { colors } from "@utils/styles"

import { ContainerBgColor, linkContainerBgColor, ContainerVerticalPadding, linkContainerVerticalPadding } from "./utils"

export const ContainerStyles = styled.div<{
  $bgColor: ContainerBgColor
  $vPadding: ContainerVerticalPadding
  $textCentered: boolean
}>`
  background-color: ${({ $bgColor }) => linkContainerBgColor($bgColor)};
  padding: ${({ $vPadding }) => linkContainerVerticalPadding($vPadding)};
  color: ${({ $bgColor }) => ($bgColor === "green" ? `${colors.white}` : "inherit")};
  text-align: ${({ $textCentered }) => ($textCentered ? "center" : "initial")};
`
