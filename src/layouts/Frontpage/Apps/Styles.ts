import styled, { css, keyframes } from "styled-components"

import { breakpoints, colors, mixin, zIndexValues } from "@utils/styles"

const move = (moveShift: number) => keyframes`
  0% {
    left: 0;
  }
  50% {
    left: -${moveShift}px;
  }
  100% {
    left: 0;
  }
`

export const Container = styled.div`
  background-color: #fdfdfd;
  padding: 2rem 0;

  @media (min-width: ${breakpoints.large}) {
    padding: 5.625rem 0;
  }
`

export const InnerContainer = styled.div`
  max-width: ${breakpoints.biggest};
  margin: 0 auto;
  padding: 1.875rem 0 3.875rem;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 7.625rem;
    height: 100%;
    padding: 1.875rem 0;
    z-index: ${zIndexValues.appsLogosGradient};
  }

  &::before {
    left: 0;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, ${colors.white} 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, ${colors.white} 0%, rgba(255, 255, 255, 0) 100%);
  }
`

export const LogoContainer = styled.div<{ $moveShift: number }>`
  display: flex;
  column-gap: 0.75rem;
  width: fit-content;
  position: relative;

  ${({ $moveShift }) =>
    $moveShift > 0 &&
    css`
      animation: ${move($moveShift)} 70s linear infinite;
    `}

  & > div:nth-child(even) {
    position: relative;
    top: 2rem;
  }
`

export const AppCardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`

export const AppCard = styled.div`
  ${mixin.centerElement}
  box-shadow:
    -5.40845px 51.3803px 20.2817px rgba(181, 181, 181, 0.01),
    -2.70423px 28.3944px 17.5775px rgba(181, 181, 181, 0.05),
    -1.35211px 12.169px 12.169px rgba(181, 181, 181, 0.09),
    0px 2.70423px 6.76056px rgba(181, 181, 181, 0.1);
  background-color: ${colors.white};
  border-radius: 0.875rem;
  width: 6.25rem;
  height: 6.25rem;
  padding: 1.5rem 0.75rem;

  @media (min-width: ${breakpoints.biggest}) {
    width: 8.5rem;
    height: 8.5rem;
  }
`
