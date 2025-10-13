import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { PageHeroTitle, StyledPageHero } from "@components/PageHero/Styles"
import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

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
  grid-template-columns: repeat(3, min(10rem, 30vw));
  grid-auto-rows: min(10rem, 30vw);
  row-gap: 1rem;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(6, min(15rem, 15vw));
    grid-auto-rows: min(15rem, 15vw);
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    margin-bottom: 3rem;
  }
`

export const AppCategory = styled.div<{ $index: number }>`
  ${mixin.centerElement};
  position: relative;
`

export const Arrow = styled.div<{ $isTop: boolean }>`
  position: absolute;
  width: calc(105%);
  height: calc(55%);
  ${({ $isTop }) => ($isTop ? "top: -3.5%;" : "bottom: -3.5%;")};
`

export const Circle = styled.div<{ $color: HeroAppColor }>`
  ${mixin.centerElement};
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  width: 85%;
  height: 85%;
  border-radius: 100%;
  border-width: min(calc(10px + 0.8vw), 25px);
  padding: 5%;
`

export const Title = styled.span`
  line-height: 1.5;
  font-weight: 700;
  font-size: ${fontSizes._12};

  @media (min-width: ${breakpoints.large}) {
    font-size: ${fontSizes._14};
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    font-size: ${fontSizes._16};
  }
`
