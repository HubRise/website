import styled, { css } from "styled-components"

import { CarouselOrientation } from "../Carousel"

export const Wrapper = styled.div`
  position: relative;
`

export const ContentWrapper = styled.div`
  overflow: hidden;
`

export const Content = styled.div<{ $orientation?: CarouselOrientation }>`
  display: flex;
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          margin-left: -1rem;
        `
      : css`
          margin-top: -1rem;
          flex-direction: column;
        `}
`

export const Item = styled.div<{ $orientation?: CarouselOrientation; $flexBasis?: string }>`
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: ${({ $flexBasis }) => ($flexBasis != null ? $flexBasis : "100%")};
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          padding-left: 1rem;
        `
      : css`
          padding-top: 1rem;
        `}
`

export const Button = styled.button<{ $orientation?: CarouselOrientation }>`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`
export const PreviousButton = styled(Button)`
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          top: 50%;
          left: -3rem;
          transform: translateY(-50%);
        `
      : css`
          top: -3rem;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `}
`

export const NextButton = styled(Button)`
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          top: 50%;
          right: -3rem;
          transform: translateY(-50%);
        `
      : css`
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `}
`
