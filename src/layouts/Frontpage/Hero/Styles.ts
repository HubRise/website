import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

import { HeroAppColor, linkHeroAppBorderColor } from "./utils"

export const Container = styled.div`
  position: relative;
  background-color: ${colors.backgroundLightest};
  padding: 5.75rem 0;
  text-align: center;

  & > a {
    margin-left: auto;
    margin-right: auto;
  }
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
  color: ${colors.primary};
`

export const Description = styled.div`
  max-width: 43rem;
  margin: 1.5rem auto 0;

  p {
    font-size: ${fontSizes._24};
    line-height: 2rem;

    @media (max-width: ${breakpoints.biggest}) {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }
  }
`

export const Apps = styled.div`
  max-width: 88.375rem;
  margin: 3.875rem auto 3.625rem;
  display: flex;

  @media (max-width: ${breakpoints.biggest}) {
    max-width: 72rem;
    margin-bottom: 2.875rem;
  }
`

export const AppInner = styled.div<{ $color: HeroAppColor }>`
  ${mixin.centerElement};
  border-width: 1.625rem;
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  width: 11.875rem;
  height: 11.875rem;
  border-radius: 100%;
  padding: 1.5rem;
  position: relative;

  span {
    font-size: ${fontSizes._16};
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.biggest}) {
    border-width: 1.25rem;
    width: 9.75rem;
    height: 9.75rem;
    padding: 1.25rem;

    span {
      font-size: ${fontSizes._14};
    }
  }
`

export const App = styled.div<{ $index: number }>`
  position: relative;
  left: ${(props) => -props.$index * 11}px;

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

    img {
      inset: auto 0 0 0 !important;
    }
  }

  @media (max-width: ${breakpoints.biggest}) {
    left: ${(props) => -props.$index * 12}px;

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
`

export const AppWrapper = styled.div`
  width: 15.25rem;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    height: 8rem !important;
  }

  @media (max-width: ${breakpoints.biggest}) {
    width: 12.625rem;

    img {
      height: 6.5rem !important;
    }
  }
`
