import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Container = styled.div`
  background-color: ${colors.backgroundWhite};

  @media not (min-width: ${breakpoints.large}) {
    display: none;
  }
`

export const Content = styled.div`
  ${mixin.containerWrapper};
  min-height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    min-height: 21rem;
  }
`

export const Title = styled.h1`
  ${fontSizeMixins.fontSizeDisplayLg};
  font-weight: 600;
  color: ${colors.textDarkest};
  text-transform: capitalize;
`
