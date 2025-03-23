import styled, { css, keyframes } from "styled-components"

import { boxShadows, breakpoints, colors, mixin, zIndexValues } from "@utils/styles"

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
  padding: 3.5rem 0;

  @media (min-width: ${breakpoints.large}) {
    padding: 5.5rem 0;
  }
`

export const InnerContainer = styled.div`
  max-width: ${breakpoints.biggest};
  margin: 0 auto;
  padding-bottom: 4rem;
  margin-bottom: -2rem;
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
    background: linear-gradient(270deg, #ffffff00 0%, ${colors.white} 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, ${colors.white} 0%, #ffffff00 100%);
  }
`

export const LogoContainer = styled.div<{ $moveShift: number; $nbCards: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $nbCards }) => Math.ceil($nbCards / 3)}, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.75rem;
  position: relative;
  width: fit-content;

  ${({ $moveShift }) =>
    $moveShift > 0 &&
    css`
      animation: ${move($moveShift)} 70s linear infinite;
    `}

  & > div:nth-child(even) {
    top: 2rem;
  }
`

export const AppCard = styled.div`
  ${mixin.centerElement}
  box-shadow: ${boxShadows.card};
  background-color: ${colors.white};
  border-radius: 0.875rem;
  width: 6.25rem;
  height: 6.25rem;
  padding: 1.5rem 0.75rem;
  position: relative;

  @media (min-width: ${breakpoints.biggest}) {
    width: 8.5rem;
    height: 8.5rem;
  }
`
