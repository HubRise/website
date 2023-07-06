import styled, { css } from "styled-components"

import {
  BackgroundColor,
  bgColorMap,
  colorMap,
  HorizontalAlign,
  Padding,
  SidePosition,
  VerticalAlign,
  VerticalSpacing,
} from "./utils"

import { breakpoints, mixin, sizes } from "@utils/styles"

export const Container = styled.div<{
  $verticalSpacing: VerticalSpacing
}>`
  margin: ${({ $verticalSpacing }) => ($verticalSpacing === "small" ? "2.5rem" : sizes.blockVerticalPadding)} 0;
`

const paddingVertical = (padding: string) => css`
  padding-top: ${padding};
  padding-bottom: ${padding};
`

const paddingHorizontal = (padding: string) => css`
  padding-left: ${padding};
  padding-right: ${padding};
`

export const Content = styled.div<{
  $padding: Padding
  $verticalPadding: boolean
  $horizontalPadding: boolean
  $backgroundColor: BackgroundColor
  $beforeExpansion: boolean
  $afterExpansion: boolean
  $hasSide: boolean
  $sidePosition: SidePosition
}>`
  position: relative;
  display: grid;
  gap: 2rem;

  ${({ $hasSide, $sidePosition }) =>
    $hasSide
      ? css`
          grid-template-areas: "main" "side";
          grid-template-columns: 1fr;
          @media (min-width: ${breakpoints.large}) {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: ${$sidePosition === "left" ? "'side main'" : "'main side'"};
          }
        `
      : css`
          grid-template-areas: "main";
          grid-template-columns: 1fr;
        `}

  max-width: ${sizes.maxWidth};
  margin: 0 auto;
  ${({ $padding, $verticalPadding }) =>
    paddingVertical($verticalPadding ? ($padding === "large" ? sizes.blockVerticalPadding : "2.5rem") : "0")};
  ${paddingHorizontal(sizes.mobilePadding)}

  color: ${({ $backgroundColor }) => colorMap[$backgroundColor]};
  background-color: ${({ $backgroundColor }) => bgColorMap[$backgroundColor]};

  @media (min-width: ${breakpoints.large}) {
    ${({ $padding, $horizontalPadding }) =>
      paddingHorizontal($horizontalPadding ? ($padding === "large" ? sizes.blockHorizontalPadding : "2.5rem") : "0")};
  }

  @media (min-width: ${breakpoints.large}) {
    ${({ $beforeExpansion, $backgroundColor }) =>
      $beforeExpansion &&
      mixin.expandBefore({ width: "calc((100vw - 100%) / 2)", color: bgColorMap[$backgroundColor] })}

    ${({ $afterExpansion, $backgroundColor }) =>
      $afterExpansion && mixin.expandAfter({ width: "calc((100vw - 100%) / 2)", color: bgColorMap[$backgroundColor] })}
  }
`

const verticalAlign = (align: VerticalAlign) =>
  align === "center" &&
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

const align = (horizontalAlign: HorizontalAlign, desktopVerticalAlign: VerticalAlign) =>
  css`
    text-align: ${horizontalAlign === "left" ? "left" : "center"};

    @media (min-width: ${breakpoints.large}) {
      text-align: ${horizontalAlign === "center" ? "center" : "left"};
      ${verticalAlign(desktopVerticalAlign)};
    }
  `

export const Main = styled.div<{ $horizontalAlign: HorizontalAlign; $desktopVerticalAlign: VerticalAlign }>`
  grid-area: main;
  ${({ $horizontalAlign, $desktopVerticalAlign }) => align($horizontalAlign, $desktopVerticalAlign)};
`

export const Side = styled.div<{ $horizontalAlign: HorizontalAlign; $desktopVerticalAlign: VerticalAlign }>`
  grid-area: side;
  ${({ $horizontalAlign, $desktopVerticalAlign }) => align($horizontalAlign, $desktopVerticalAlign)};
`
