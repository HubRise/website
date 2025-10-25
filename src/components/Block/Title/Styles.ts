import styled, { css } from "styled-components"

import { BackgroundColor, titleColorMap, HorizontalAlign, linkColorMap } from "@components/Block/utils"
import { breakpoints, fontSizes, lineHeights, mixin, sizes } from "@utils/styles"

export const StyledTitle = styled.h3<{
  $backgroundColor: BackgroundColor
  $horizontalAlign: HorizontalAlign
}>`
  margin-bottom: 2.5rem;
  position: relative;

  scroll-snap-align: start;
  scroll-margin-top: ${sizes.headerHeight};

  color: ${({ $backgroundColor }) => titleColorMap[$backgroundColor]};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: ${fontSizes._42};
  line-height: ${lineHeights.largeTitle};
  text-align: ${({ $horizontalAlign }) => ($horizontalAlign === "left" ? "left" : "center")};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: ${({ $horizontalAlign }) => ($horizontalAlign === "left" ? "auto" : "0")};
    top: 100%;
    margin: 10px auto;
    width: 5rem;
    height: 3px;
    background-color: ${({ $backgroundColor }) => linkColorMap[$backgroundColor]};
    border-radius: 6.25rem;

    @media (min-width: ${breakpoints.biggest}) {
      width: 7.5rem;
    }
  }

  ${({ $horizontalAlign }) => css`
    @media (min-width: ${breakpoints.large}) {
      text-align: ${$horizontalAlign === "center" ? "center" : "left"};
      &::after {
        right: ${$horizontalAlign === "center" ? "0" : "auto"};
      }
    }
  `}
`

export const Anchor = styled.a`
  ${mixin.clickable};
`
