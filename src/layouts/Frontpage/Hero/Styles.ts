import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizeMixins, fontSizes, mixin } from "@utils/styles"

import { HeroAppColor, linkHeroAppBorderColor } from "./utils"

export const Container = styled.div`
  position: relative;
  background-color: ${colors.backgroundLightest};
  padding: 3.5rem 1rem;
  text-align: center;

  ${StyledButton} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.medium}) {
    ${StyledButton} {
      width: fit-content;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 5.5rem 1rem;
  }
`

export const Title = styled.h1`
  ${fontSizeMixins.fontSizeDisplaySm}
  line-height: 2.5rem;
  font-weight: 600;
  color: ${colors.textDarkest};
  max-width: 65rem;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplayXl}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplay2Xl}
  }
`

export const TitleHighlight = styled.span`
  color: ${colors.primary};
`

export const Description = styled.div`
  max-width: 45rem;
  margin: 0.75rem auto 0;

  @media (min-width: ${breakpoints.large}) {
    margin: 1.5rem auto 0;
  }

  p {
    ${fontSizeMixins.fontSizeTextMd}

    @media (min-width: ${breakpoints.large}) {
      ${fontSizeMixins.fontSizeTextXl}
    }

    @media (min-width: ${breakpoints.biggest}) {
      ${fontSizeMixins.fontSizeText2Xl}
    }
  }
`

export const Apps = styled.div`
  max-width: 23.5rem;
  margin: 3.5rem auto 1.875rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.875rem;

  @media (min-width: ${breakpoints.medium}) {
    max-width: 46.5rem;
    flex-wrap: nowrap;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 72rem;
    margin-bottom: 2.875rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 88.375rem;
    margin-bottom: 3.625rem;
  }
`

export const AppInner = styled.div<{ $color: HeroAppColor }>`
  ${mixin.centerElement};
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  border-width: 0.625rem;
  width: 6rem;
  height: 6rem;
  padding: 0.75rem;
  border-radius: 100%;
  position: relative;

  span {
    font-size: 0.625rem;
    line-height: 0.75rem;
    font-weight: 700;
  }

  @media (min-width: ${breakpoints.large}) {
    border-width: 1.25rem;
    width: 9.75rem;
    height: 9.75rem;
    padding: 1.25rem;

    span {
      font-size: ${fontSizes._14};
      line-height: normal;
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    border-width: 1.625rem;
    width: 11.875rem;
    height: 11.875rem;
    padding: 1.5rem;

    span {
      font-size: ${fontSizes._16};
    }
  }
`

export const App = styled.div<{ $index: number }>`
  position: relative;

  &:nth-child(-n + 3) {
    left: ${(props) => -props.$index * 7}px;
  }

  &:nth-child(5),
  &:nth-child(6) {
    left: ${(props) => -(props.$index - 3) * 7}px;
  }

  &:nth-child(odd) {
    ${AppInner} {
      top: 0.875rem;
    }
  }

  &:nth-child(even) {
    top: 1.875rem;

    ${AppInner} {
      top: -0.875rem;
    }

    img {
      inset: auto 0 0 0 !important;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    &:nth-child(-n + 3),
    &:nth-child(5),
    &:nth-child(6) {
      left: ${(props) => -props.$index * 7}px;
    }

    left: ${(props) => -props.$index * 7}px;
  }

  @media (min-width: ${breakpoints.large}) {
    left: ${(props) => -props.$index * 12}px !important;

    &:nth-child(odd) {
      ${AppInner} {
        top: 1.375rem;
      }
    }

    &:nth-child(even) {
      top: 2.875rem;

      ${AppInner} {
        top: -1.375rem;
      }
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    left: ${(props) => -props.$index * 11}px !important;

    &:nth-child(odd) {
      ${AppInner} {
        top: 1.625rem;
      }
    }

    &:nth-child(even) {
      top: 3.625rem;

      ${AppInner} {
        top: -1.625rem;
      }
    }
  }
`

export const AppWrapper = styled.div`
  width: 7.75rem;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    height: 4rem !important;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 12.625rem;

    img {
      height: 6.5rem !important;
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    width: 15.25rem;

    img {
      height: 8rem !important;
    }
  }
`
