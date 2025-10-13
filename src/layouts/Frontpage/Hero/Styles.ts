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
  grid-template-rows: repeat(2, 5.75rem);
  row-gap: 1rem;

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: repeat(3, 7.75rem);
    grid-template-rows: repeat(2, 7.75rem);
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(6, 7.75rem);
    grid-template-rows: 7.75rem;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    grid-template-columns: repeat(6, 12.625rem);
    grid-template-rows: 12.625rem;
    margin-bottom: 2.875rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    grid-template-columns: repeat(6, 15.25rem);
    grid-template-rows: 15.25rem;
    margin-bottom: 3.625rem;
  }
`

export const AppCategory = styled.div<{ $index: number }>`
  ${mixin.centerElement};
  position: relative;
`

export const Arrow = styled.div<{ $isTop: boolean }>`
  position: absolute;

  width: calc(100% + 4px);
  height: calc(50% + 4px);
  top: ${({ $isTop }) => ($isTop ? "-3px" : "auto")};
  bottom: ${({ $isTop }) => ($isTop ? "auto" : "-3px")};

  @media (min-width: ${breakpoints.small}) {
    width: calc(100% + 6px);
    height: calc(50% + 6px);
    top: ${({ $isTop }) => ($isTop ? "-4px" : "auto")};
    bottom: ${({ $isTop }) => ($isTop ? "auto" : "-4px")};
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    width: calc(100% + 10px);
    height: calc(50% + 10px);
    top: ${({ $isTop }) => ($isTop ? "-7px" : "auto")};
    bottom: ${({ $isTop }) => ($isTop ? "auto" : "-7px")};
  }
`

export const Circle = styled.div<{ $color: HeroAppColor }>`
  ${mixin.centerElement};
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  width: 85%;
  height: 85%;
  border-radius: 100%;
  border-width: 10px;

  @media (min-width: ${breakpoints.extraLarge}) {
    border-width: 20px;
  }

  @media (min-width: ${breakpoints.biggest}) {
    border-width: 26px;
  }
`

export const Title = styled.span`
  line-height: ${lineHeights.compact};
  font-weight: 700;
  font-size: 0.625rem;

  @media (min-width: ${breakpoints.small}) {
    font-size: ${fontSizes._12};
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    font-size: ${fontSizes._16};
  }
`
