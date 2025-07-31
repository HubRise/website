import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const StyledPageHero = styled.div<{ $isTextCentered: boolean }>`
  background-color: ${colors.backgroundWhite};
  padding: 3.5rem 1rem;

  ${({ $isTextCentered }) =>
    $isTextCentered &&
    css`
      text-align: center;
    `}

  @media (min-width: ${breakpoints.large}) {
    padding: 5rem;
  }
`

export const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  ${fontSizeMixins.fontSizeDisplayMd};
  font-weight: 600;
  color: ${colors.textDarkest};

  span {
    color: ${colors.primary};
  }

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplayXl}
  }
`

export const Description = styled.p`
  ${mixin.description}
`

export const DescriptionMdx = styled.div`
  max-width: 45rem;
  margin: 0 auto;

  p {
    ${mixin.description}
  }
`
