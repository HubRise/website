import Image from "next/image"
import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { PageHeroTitle, StyledPageHero } from "@components/PageHero/Styles"
import { breakpoints, colors, fontSizes, lineHeights, mixin } from "@utils/styles"

import { HeroAppColor, linkHeroAppBorderColor } from "./utils"

export const FrontpageHero = styled.div`
  ${StyledPageHero} {
    background-color: ${colors.backgroundLightest};

    ${PageHeroTitle} {
      max-width: 65rem;
      margin: 0 auto;
    }

    ${StyledButton} {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: ${breakpoints.large}) {
      ${StyledButton} {
        width: fit-content;
      }
    }
  }
`

export const AppCategories = styled.div`
  max-width: 17.5rem;
  margin: 3.5rem auto 1.875rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.875rem;

  @media (min-width: ${breakpoints.small}) {
    max-width: 23.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 46.5rem;
    flex-wrap: nowrap;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    max-width: 72rem;
    margin-bottom: 2.875rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 88.375rem;
    margin-bottom: 3.625rem;
  }
`

export const AppImage = styled(Image)``

export const AppInnerTitle = styled.span`
  font-size: 0.625rem;
  line-height: ${lineHeights.compact};
  font-weight: 700;
`

export const AppInner = styled.div<{ $color: HeroAppColor }>`
  ${mixin.centerElement};
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  border-width: 0.625rem;
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.75rem;
  border-radius: 100%;
  position: relative;

  @media (min-width: ${breakpoints.small}) {
    width: 6rem;
    height: 6rem;

    ${AppInnerTitle} {
      font-size: ${fontSizes._12};
    }
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    border-width: 1.25rem;
    width: 9.75rem;
    height: 9.75rem;
    padding: 1.25rem;

    ${AppInnerTitle} {
      font-size: ${fontSizes._16};
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    border-width: 1.625rem;
    width: 11.875rem;
    height: 11.875rem;
    padding: 1.5rem;
  }
`

export const AppCategory = styled.div<{ $index: number }>`
  position: relative;

  &:nth-child(-n + 3) {
    left: ${(props) => -props.$index * 4}px;
  }

  &:nth-child(5),
  &:nth-child(6) {
    left: ${(props) => -(props.$index - 3) * 4}px;
  }

  &:nth-child(odd) {
    ${AppInner} {
      top: 0.975rem;
    }
  }

  &:nth-child(even) {
    top: 2.375rem;

    ${AppInner} {
      top: -0.975rem;
    }

    ${AppImage} {
      inset: auto 0 0 0 !important;
    }
  }

  @media (min-width: ${breakpoints.small}) {
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
    }
  }

  @media (min-width: ${breakpoints.large}) {
    &:nth-child(-n + 3),
    &:nth-child(5),
    &:nth-child(6) {
      left: ${(props) => -props.$index * 7}px;
    }

    left: ${(props) => -props.$index * 7}px;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
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
  width: 5.75rem;
  display: flex;
  justify-content: center;
  position: relative;

  ${AppImage} {
    height: 4rem !important;
  }

  @media (min-width: ${breakpoints.small}) {
    width: 7.75rem;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    width: 12.625rem;

    ${AppImage} {
      height: 6.5rem !important;
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    width: 15.25rem;

    ${AppImage} {
      height: 8rem !important;
    }
  }
`
