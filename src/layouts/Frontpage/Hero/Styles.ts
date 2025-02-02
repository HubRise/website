import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

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

export const AppInner = styled.div<{ $color: HeroAppColor }>`
  ${mixin.centerElement};
  border-width: 1.625rem;
  border-style: solid;
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  width: 11.875rem;
  height: 11.875rem;
  border-radius: 100%;
  padding: 1.5625rem;
  position: relative;

  span {
    font-size: ${fontSizes._16};
    font-weight: 700;
    color: ${colors.textDefault};
  }
`

export const AppWrapper = styled.div<{ $index: number }>`
  position: relative;
  width: 15.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${(props) => -props.$index * 10}px;

  img {
    height: 8rem !important;
  }

  &:nth-child(odd) {
    ${AppInner} {
      top: 1.625rem;
    }
  }

  &:nth-child(even) {
    top: 3.5rem;

    ${AppInner} {
      top: -1.625rem;
    }

    img {
      inset: auto 0 0 0 !important;
    }
  }
`
