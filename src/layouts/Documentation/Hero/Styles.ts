import styled from "styled-components"

import { StyledBreadcrumbs } from "@components/Breadcrumbs/Styles"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Container = styled.div`
  background-color: ${colors.backgroundWhite};
`

export const Content = styled.div`
  ${mixin.containerWrapper}
  min-height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${StyledBreadcrumbs} {
    margin: 0;
    position: absolute;
    bottom: 0.5rem;
    left: 0;
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 21rem;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    ${StyledBreadcrumbs} {
      left: 10rem;
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${StyledBreadcrumbs} {
      left: 22rem;
    }
  }
`

export const Title = styled.h1`
  ${fontSizeMixins.fontSizeDisplaySm}
  font-weight: 600;
  color: ${colors.textDarkest};
  text-transform: capitalize;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplayXl}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplay2Xl}
  }
`
