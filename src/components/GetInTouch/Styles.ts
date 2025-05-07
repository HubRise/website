import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  ${mixin.containerWrapper}
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  img {
    height: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    text-align: left;
  }

  @media (min-width: ${breakpoints.large}) {
    column-gap: 2.5rem;
  }
`

export const Content = styled.div`
  ${StyledButton} {
    margin-top: 1rem;
    width: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    width: calc(100% - 225px);

    ${StyledButton} {
      width: fit-content;
    }
  }
`

export const Title = styled.h3`
  ${fontSizeMixins.fontSizeDisplaySm}
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplayMd}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplayLg}
  }
`

export const Description = styled.p`
  ${mixin.description}
`
