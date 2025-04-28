import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const Content = styled.div`
  display: flex;
  gap: 3.75rem;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.large}) {
    flex-wrap: nowrap;
  }
`

export const ContentBlock = styled.p`
  ${mixin.description}
  position: relative;
  margin-top: 0;

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
`
