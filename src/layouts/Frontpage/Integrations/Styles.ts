import styled, { css } from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { SidePosition } from "@components/SideBlock/types"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const ContentWrapper = styled.div<{ $padding?: SidePosition }>`
  ${StyledButton} {
    width: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    ${StyledButton} {
      width: fit-content;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    ${({ $padding }) =>
      $padding === "left"
        ? css`
            padding-left: 3.5rem;
          `
        : css`
            padding-right: 3.5rem;
          `}
  }
`

export const SideBlockWrapper = styled.div`
  padding: 3.5rem 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media (min-width: ${breakpoints.large}) {
    row-gap: 3.5rem;
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

export const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  margin-top: 1.25rem;
`

export const Advantage = styled.div`
  display: flex;
  align-items: center;
`

export const AdvantageText = styled.span`
  display: inline-block;
  margin-left: 0.875rem;
  ${fontSizeMixins.fontSizeTextMd}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextXl}
  }
`

export const IconWrapper = styled.div`
  background-color: ${colors.primary};
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  ${mixin.centerElement}
  flex-shrink: 0;

  @media (min-width: ${breakpoints.biggest}) {
    width: 1.75rem;
    height: 1.75rem;
  }
`
