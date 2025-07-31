import styled from "styled-components"

import { breakpoints, colors } from "@utils/styles"

export const Wrapper = styled.div`
  position: relative;
`

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  @media (min-width: ${breakpoints.large}) {
    width: 100%;
    margin: 0 auto;
  }
`

export const Inner = styled.div<{ $isSliding: boolean }>`
  display: flex;
  transition: transform 0.3s ease;

  pointer-events: ${({ $isSliding }) => ($isSliding ? "none" : "all")};
`

export const Slide = styled.div`
  flex: 0 0 calc(50% - 0.5rem); // 50% for 2 items
  margin-right: 1rem;
`

export const Button = styled.button`
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 0;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(calc(50% + 1.25rem));
  font-size: 1.5rem;
  border: 1px solid ${colors.borderMedium};
  cursor: pointer;
  @media (min-width: ${breakpoints.large}) {
    display: flex;
  }
`

export const PrevButton = styled(Button)`
  left: 0;
`

export const NextButton = styled(Button)`
  left: 3.5rem;
`
