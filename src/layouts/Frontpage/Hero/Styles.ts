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
  margin: 3.5rem auto 1.875rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 5.75rem);
  row-gap: 2.875rem;

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: repeat(3, 7.75rem);
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(6, 7.75rem);
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    grid-template-columns: repeat(6, 12.625rem);
    margin-bottom: 2.875rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    grid-template-columns: repeat(6, 15.25rem);
    margin-bottom: 3.625rem;
  }
`

export const Arrow = styled(Image)`
  height: 4rem !important;

  @media (min-width: ${breakpoints.extraLarge}) {
    height: 6.5rem !important;
  }

  @media (min-width: ${breakpoints.biggest}) {
    height: 8rem !important;
  }
`

export const Circle = styled.div<{ $color: HeroAppColor }>`
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
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    border-width: 1.25rem;
    width: 9.75rem;
    height: 9.75rem;
    padding: 1.25rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    border-width: 1.625rem;
    width: 11.875rem;
    height: 11.875rem;
    padding: 1.5rem;
  }
`

export const Title = styled.span`
  font-size: 0.625rem;
  line-height: ${lineHeights.compact};
  font-weight: 700;

  @media (min-width: ${breakpoints.small}) {
    font-size: ${fontSizes._12};
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    font-size: ${fontSizes._16};
  }
`

export const AppCategory = styled.div<{ $index: number }>`
  display: flex;
  justify-content: center;
  position: relative;

  &:nth-child(-n + 3) {
    left: ${(props) => -props.$index * 4}px;
  }

  &:nth-child(5),
  &:nth-child(6) {
    left: ${(props) => -(props.$index - 3) * 4}px;
  }

  &:nth-child(odd) {
    ${Circle} {
      top: 0.975rem;
    }
  }

  &:nth-child(even) {
    top: 2.375rem;

    ${Circle} {
      top: -0.975rem;
    }

    ${Arrow} {
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
      ${Circle} {
        top: 0.875rem;
      }
    }

    &:nth-child(even) {
      top: 1.875rem;

      ${Circle} {
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
      ${Circle} {
        top: 1.375rem;
      }
    }

    &:nth-child(even) {
      top: 2.875rem;

      ${Circle} {
        top: -1.375rem;
      }
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    left: ${(props) => -props.$index * 11}px !important;

    &:nth-child(odd) {
      ${Circle} {
        top: 1.625rem;
      }
    }

    &:nth-child(even) {
      top: 3.625rem;

      ${Circle} {
        top: -1.625rem;
      }
    }
  }
`
