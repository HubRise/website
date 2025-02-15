import styled, { css } from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { SidePosition } from "@components/SideBlock/types"
import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

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
  font-size: ${fontSizes._24};
  line-height: 2.125rem;
  font-weight: 600;
  color: ${colors.textDarkest};
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.875rem;
    line-height: 2.375rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 2.25rem;
    line-height: 2.875rem;
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
  font-size: ${fontSizes._16};
  line-height: 1.5rem;

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 2rem;
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
