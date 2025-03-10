import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const SupportingText = styled.span`
  display: block;
  ${fontSizeMixins.fontSizeTextXl};
  margin-top: 1.25rem;
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
      background-color: ${colors.white};

      @media (min-width: ${breakpoints.large}) {
        top: 0;
        right: -1.875rem;
        width: 1px;
        height: 100%;
      }
    }
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`
