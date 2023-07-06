import styled, { css } from "styled-components"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { colors, mixin } from "@utils/styles"

const slideControl = css`
  width: 3.5rem;
  height: 3.5rem;
  ${mixin.centerElement};
  border: thin solid ${colors.white};
  border-radius: 50%;
  color: ${colors.white};
  opacity: 0.5;

  &:hover,
  &:focus {
    outline: none;
    opacity: 1;
    cursor: pointer;
    background-color: ${colors.backgroundDark};
  }
}
`

const arrow = (isVisible: boolean) => css`
  visibility: ${isVisible ? "unset" : "hidden"};
  ${slideControl};
`

export const StyledClose = styled.button`
  justify-self: flex-end;
  ${slideControl};
`

export const StyledPrevArrow = styled.button<{ isVisible: boolean }>`
  grid-area: arrow_previous;
  justify-self: flex-start;
  ${(props) => arrow(props.isVisible)};
`

export const StyledNextArrow = styled.button<{ isVisible: boolean }>`
  grid-area: arrow_next;
  justify-self: flex-end;
  ${(props) => arrow(props.isVisible)};
`
