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
  margin: 3.5rem auto 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, min(45vw, 12rem));
  grid-auto-rows: min(45vw, 12rem);
  row-gap: 2rem;

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(3, min(30vw, 12rem));
    grid-auto-rows: min(30vw, 12rem);
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    margin-bottom: 3rem;
    grid-template-columns: repeat(6, min(15vw, 15rem));
    grid-auto-rows: min(15vw, 15rem);
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
  width: 82%;
  height: 82%;
  border-radius: 100%;
  border-width: min(calc(15px + 0.5vw), 25px);
  padding: 5%;
`

export const Title = styled.span`
  line-height: 1.5;
  font-weight: 700;
  font-size: ${fontSizes._14};

  @media (min-width: ${breakpoints.extraLarge}) {
    font-size: ${fontSizes._16};
  }
`
