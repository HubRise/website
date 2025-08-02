import styled, { css, keyframes } from "styled-components"

import { boxShadows, breakpoints, colors, mixin, zIndexValues } from "@utils/styles"

const translateGrid = (maxTranslate: number) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-${maxTranslate}px);
  }
`

export const Container = styled.div`
  background-color: #fdfdfd;
  padding: 3.5rem 0;

  @media (min-width: ${breakpoints.large}) {
    padding: 5.5rem 0;
  }
`

export const CarouselViewport = styled.div`
  max-width: ${breakpoints.biggest};
  margin: 0 auto -2rem auto;
  padding-bottom: 4rem;
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
    z-index: 1;
  }

  &::before {
    left: 0;
    background: linear-gradient(270deg, #ffffff00 0%, ${colors.backgroundWhite} 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, ${colors.backgroundWhite} 0%, #ffffff00 100%);
  }
`

export const AppGrid = styled.div<{ $nbRows: number; $nbCols: number; $maxTranslate: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $nbCols }) => $nbCols}, 1fr);
  grid-template-rows: repeat(${({ $nbRows }) => $nbRows}, 1fr);
  gap: 0.75rem;
  position: relative;
  width: fit-content;

  ${({ $nbCols, $maxTranslate }) => {
    const columnsPerSecond = 2
    if ($maxTranslate)
      return css`
        animation: ${translateGrid($maxTranslate)} ${$nbCols / columnsPerSecond}s linear infinite;
      `
  }}
`

export const AppCard = styled.div<{ $index: number }>`
  ${mixin.centerElement}
  box-shadow: ${boxShadows.card};
  background-color: ${colors.backgroundWhite};
  border-radius: 0.875rem;
  width: 6.25rem;
  height: 6.25rem;
  padding: 1.5rem 0.75rem;
  position: relative;
  ${({ $index }) => ($index % 2 === 0 ? "top: 0;" : "top: 2rem;")}

  & img {
    width: fit-content;
  }
`
