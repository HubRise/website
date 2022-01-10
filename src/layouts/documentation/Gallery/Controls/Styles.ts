import styled, { css } from "styled-components"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { colors } from "@utils/styles"

const slideControl = css`
  display: grid;
  width: 2em;
  height: 2em;
  place-items: center;
  border-radius: 50%;
  border: 1px solid ${colors.white};
  font-size: 1.2em;
  color: ${colors.white};
  opacity: 0.5;

  & svg {
    margin: auto;
  }

  &:hover,
  &:focus {
    outline: none;
    opacity: 1;
    cursor: pointer;
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
