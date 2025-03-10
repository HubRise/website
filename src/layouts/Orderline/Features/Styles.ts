import styled, { css } from "styled-components"

import { Container } from "@components/ScreenContainer/Styles"
import { StyledUnderline } from "@components/Underline/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const FeaturesContainer = styled.div`
  ${Container} {
    padding-top: 0;
  }
`

export const SideBlocks = styled.div`
  padding: 3.5rem 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media (min-width: ${breakpoints.large}) {
    row-gap: 3.5rem;
  }
`

export const ContentWrapper = styled.div`
  position: relative;

  ${StyledUnderline} {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.large}) {
    text-align: left;

    ${StyledUnderline} {
      margin-left: 0;
      margin-right: 0;
    }
  }
`

export const Title = styled.h3`
  ${fontSizeMixins.fontSizeText2Xl}
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplaySm}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplayMd}
  }
`

export const Description = styled.p`
  ${fontSizeMixins.fontSizeTextMd}
  margin-top: 1rem;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeTextLg}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

export const HandDrawnArrow = styled.div<{ $isFlipped: boolean }>`
  display: none;
  width: 8.75rem;
  height: 6rem;
  position: absolute;
  top: -7.5rem;

  ${({ $isFlipped }) =>
    $isFlipped
      ? css`
          left: 0;
          transform: scale(-1, 1);
        `
      : css`
          right: 0;
        `}

  @media (min-width: ${breakpoints.large}) {
    display: block;
  }
`
