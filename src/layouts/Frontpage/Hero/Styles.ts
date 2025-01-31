import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizes, fontWeights } from "@utils/styles"

import { HeroAppColor, linkHeroAppBorderColor } from "./utils"

const mixin = {
  appWrapper: css`
    width: 15.25rem;
    height: 7.625rem;
    padding: 1rem;
    position: relative;
    border-width: 0.625rem;
    border-style: solid;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
    }
  `,

  appInner: css`
    border-width: 1.625rem;
    border-style: solid;
    width: 11.875rem;
    height: 11.875rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5625rem;

    span {
      font-size: ${fontSizes._16};
      font-weight: ${fontWeights.bold};
      color: ${colors.textDefault};
    }
  `,
}

export const Container = styled.div`
  position: relative;
  background-color: ${colors.backgroundLightest};
  padding: 5.875rem 0;
  text-align: center;
`

export const Title = styled.h1`
  font-weight: ${fontWeights.semiBold};
  color: ${colors.textDarkest};
  font-size: ${fontSizes._72};
  line-height: 5.125rem;
  max-width: 66rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.bigScreen}) {
    font-size: ${fontSizes._66};
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

    @media (max-width: ${breakpoints.bigScreen}) {
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

  @media (max-width: ${breakpoints.bigScreen}) {
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

export const App = styled.div<{ $type?: string; $index: number; $appsAmmount: number }>`
  position: relative;
  left: ${(props) => -props.$index * 10}px;
  top: ${(props) => (props.$type === "bottom" ? "1.625rem" : "auto")};
  z-index: ${(props) => props.$appsAmmount - props.$index};
`

export const AppWrapperTop = styled.div<{ $color: HeroAppColor }>`
  ${mixin.appWrapper};
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  border-top-left-radius: 8.25rem;
  border-top-right-radius: 8.25rem;
  border-bottom: 0;

  &::before {
    border-left: 0.375rem solid transparent;
    border-right: 0.375rem solid transparent;
    border-bottom: 0.375rem solid ${colors.white};
    top: 6.6875rem;
    left: -0.625rem;
  }

  &::after {
    border-left: 0.3125rem solid transparent;
    border-right: 0.3125rem solid transparent;
    border-top-width: 0.3125rem;
    border-top-style: solid;
    border-top-color: ${({ $color }) => linkHeroAppBorderColor($color)};
    top: 7rem;
    right: -0.625rem;
  }
`

export const AppInnerTop = styled.div<{ $color: HeroAppColor }>`
  ${mixin.appInner};
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
`

export const AppWrapperBottom = styled.div<{ $color: HeroAppColor }>`
  ${mixin.appWrapper};
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  border-bottom-left-radius: 8.25rem;
  border-bottom-right-radius: 8.25rem;
  border-top: 0;
  top: 6.25rem;

  &::before {
    border-left: 0.375rem solid transparent;
    border-right: 0.375rem solid transparent;
    border-top: 0.375rem solid ${colors.white};
    top: 0;
    left: -0.6875rem;
  }

  &::after {
    border-left: 0.3125rem solid transparent;
    border-right: 0.3125rem solid transparent;
    border-bottom-width: 0.3125rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ $color }) => linkHeroAppBorderColor($color)};
    top: -0.28125rem;
    right: -0.625rem;
  }
`

export const AppInnerBottom = styled.div<{ $color: HeroAppColor }>`
  ${mixin.appInner}
  border-color: ${({ $color }) => linkHeroAppBorderColor($color)};
  position: relative;
  top: -6.875rem;
`
