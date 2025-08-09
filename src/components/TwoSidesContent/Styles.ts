import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const TwoSidesContentWrapper = styled.div`
  ${mixin.containerWrapper}
`

export const Content = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.large}) {
    gap: 3.75rem;
    flex-wrap: nowrap;
  }
`

export const ContentBlock = styled.p`
  position: relative;
  ${mixin.responsiveText};

  @media (min-width: ${breakpoints.large}) {
    &:first-child {
      &::after {
        content: "";
        position: absolute;
        background-color: ${colors.backgroundWhite};
        top: 0;
        right: -1.875rem;
        width: 1px;
        height: 100%;
      }
    }
  }
`
