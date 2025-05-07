import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const TwoSidesContentWrapper = styled.div`
  ${mixin.containerWrapper}
`

export const Content = styled.div`
  display: flex;
  gap: 3.75rem;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.large}) {
    flex-wrap: nowrap;
  }
`

export const ContentBlock = styled.p`
  position: relative;
  ${fontSizeMixins.fontSizeTextMd}

  &:first-child {
    &::after {
      content: "";
      position: absolute;
      top: calc(100% + 1.875rem);
      right: 0;
      width: 100%;
      height: 1px;
      background-color: ${colors.backgroundWhite};

      @media (min-width: ${breakpoints.large}) {
        top: 0;
        right: -1.875rem;
        width: 1px;
        height: 100%;
      }
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`
