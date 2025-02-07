import styled, { css } from "styled-components"

import { SidePosition } from "@components/SideBlock/types"
import { colors, fontSizes, mixin } from "@utils/styles"

export const ContentWrapper = styled.div<{ $padding?: SidePosition }>`
  ${({ $padding }) =>
    $padding === "left"
      ? css`
          padding-left: 3.875rem;
        `
      : css`
          padding-right: 3.875rem;
        `}
`

export const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
`

export const Advantage = styled.div`
  display: flex;
  align-items: center;

  & > span {
    display: inline-block;
    margin-left: 0.875rem;
    font-size: ${fontSizes._20};
  }
`

export const IconWrapper = styled.div`
  background-color: ${colors.primary};
  border-radius: 100%;
  width: 1.75rem;
  height: 1.75rem;
  ${mixin.centerElement}
  flex-shrink: 0;
`
