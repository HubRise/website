import styled from "styled-components"

import { breakpoints, colors } from "@utils/styles"
export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const CarouselContainer = styled.div`
  overflow: hidden;

  @media (min-width: ${breakpoints.medium}) {
    margin-left: -0.5rem;
    width: calc(100% - 1rem - 5px);
  }
`

export const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`

export const Slide = styled.div`
  flex: 0 0 50%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

export const Button = styled.button<{ direction: "prev" | "next" }>`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1;
  color: ${colors.textDark};
  ${(props: { direction: "prev" | "next" }) =>
    props.direction === "prev" ? "left: calc(1rem + 2px);" : "right: calc(1rem + 2px);"}

  @media (min-width: ${breakpoints.medium}) {
    display: block;
  }

  @media (min-width: ${breakpoints.medium}) {
    ${(props: { direction: "prev" | "next" }) => (props.direction === "prev" ? "left: 0;" : "right: 0;")}
  }
`
