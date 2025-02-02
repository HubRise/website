import styled from "styled-components"

import { breakpoints, colors, fontSizes } from "@utils/styles"

import { HeroAppColor, linkHeroAppBorderColor } from "./utils"

export const Container = styled.div`
  position: relative;
  background-color: ${colors.backgroundLightest};
  padding: 5.875rem 0;
  text-align: center;
`

export const Title = styled.h1`
  font-weight: 600;
  color: ${colors.textDarkest};
  font-size: 4.5rem;
  line-height: 5.125rem;
  max-width: 66rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: 4.125rem;
    line-height: 4.75rem;
  }
`

export const TitleHighlight = styled.span`
  color: ${colors.green};
`

export const Description = styled.div`
  max-width: 43rem;
  margin: 1.5rem auto 0;

  p {
    color: ${colors.textDefault};
    font-size: ${fontSizes._24};
    line-height: 2rem;

    @media (max-width: ${breakpoints.biggest}) {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }
  }
`

export const Button = styled.a`
  display: inline-block;
  width: auto;
  height: 3.375rem;
  line-height: 3.375rem;
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${fontSizes._20};
  border-radius: 0.5rem;
  padding: 0 1.125rem;
  margin-top: 2.875rem;
  transition: background-color 0.5s ease;

  @media (max-width: ${breakpoints.biggest}) {
    height: 3rem;
    line-height: 3rem;
    font-size: ${fontSizes._16};
  }

  &:hover {
    background-color: ${colors.textDarkest};
  }
`

export const Apps = styled.div`
  max-width: 88.375rem;
  margin: 3.875rem auto 8rem;
  display: flex;
`

export const AppWrapper = styled.div<{ $color: HeroAppColor }>`
  width: 15.25rem;
  height: 7.625rem;
  padding: 1rem;
  position: relative;
  border-width: 0.625rem;
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    border-left: 0.375rem solid transparent;
    border-right: 0.375rem solid transparent;
  }

  &::after {
    border-left: 0.3125rem solid transparent;
    border-right: 0.3125rem solid transparent;
  }
`

export const AppInner = styled.div<{ $color: HeroAppColor }>`
  border-width: 1.625rem;
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  width: 11.875rem;
  height: 11.875rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5625rem;

  span {
    font-size: ${fontSizes._16};
    font-weight: 700;
    color: ${colors.textDefault};
  }
`

export const App = styled.div<{ $index: number; $nbApps: number; $color: HeroAppColor }>`
  position: relative;
  left: ${(props) => -props.$index * 10}px;
  z-index: ${(props) => props.$nbApps - props.$index};

  &:nth-child(odd) {
    ${AppWrapper} {
      border-top-left-radius: 8.25rem;
      border-top-right-radius: 8.25rem;
      border-bottom: 0;

      &::before {
        border-bottom: 0.375rem solid ${colors.white};
        top: 6.6875rem;
        left: -0.625rem;
      }

      &::after {
        border-top-width: 0.3125rem;
        border-top-style: solid;
        border-top-color: ${({ $color }) => linkHeroAppBorderColor($color)};
        top: 7rem;
        right: -0.625rem;
      }
    }
  }

  &:nth-child(even) {
    top: 1.625rem;

    ${AppWrapper} {
      border-bottom-left-radius: 8.25rem;
      border-bottom-right-radius: 8.25rem;
      border-top: 0;
      top: 6.25rem;

      &::before {
        border-top: 0.375rem solid ${colors.white};
        top: 0;
        left: -0.6875rem;
      }

      &::after {
        border-bottom-width: 0.3125rem;
        border-bottom-style: solid;
        border-bottom-color: ${({ $color }) => linkHeroAppBorderColor($color)};
        top: -0.28125rem;
        right: -0.625rem;
      }
    }

    ${AppInner} {
      position: relative;
      top: -6.875rem;
    }
  }
`
