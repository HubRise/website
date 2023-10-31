import Image from "next/image"
import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizes, mixin, zIndexValues } from "@utils/styles"

const mobileBreakpoint = breakpoints.burgerMenu

const slideControl = css`
  width: 3.5rem;
  height: 3.5rem;
  ${mixin.centerElement};
  border: thin solid ${colors.white};
  border-radius: 50%;
  color: ${colors.white};
  opacity: 0.5;
  ${mixin.clickable};

  &:hover,
  &:focus {
    outline: none;
    opacity: 1;
    background-color: ${colors.backgroundDark};
  }
}
`

const arrow = css`
  background-color: ${colors.backgroundDarker};
  position: fixed;
  top: 50%;
  ${slideControl};
`

export const StyledSlideshow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndexValues.slideshow};
  display: flex;
  flex-direction: column;

  color: ${colors.white};
  background-color: rgba(0, 0, 0, 0.7);
  font-size: ${fontSizes._18};
`

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.backgroundDarker};
`

export const Title = styled.div`
  flex: 1;
  padding: 1rem;
`

export const Count = styled.span`
  white-space: nowrap;
`

export const Close = styled.button`
  margin: 1rem;
  ${slideControl};
`

export const Slide = styled.div`
  flex: 1;
  min-height: 0; // Take up all available space
  display: flex;
  align-items: center;
  padding: 1rem 0;

  @media not all and (min-width: ${mobileBreakpoint}) {
    overflow-y: auto;
  }

  @media (min-width: ${mobileBreakpoint}) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

export const SlideImage = styled(Image)`
  border-radius: 0.6rem;
  user-select: none;
  max-height: 100%;
  width: auto;
  margin: 0 auto;

  @media not all and (min-width: ${mobileBreakpoint}) {
    max-width: 250vw;
  }

  @media (min-width: ${mobileBreakpoint}) {
  }
`

export const PrevArrow = styled.button`
  left: 1rem;
  ${arrow};
`

export const NextArrow = styled.button`
  right: 1rem;
  ${arrow};
`
