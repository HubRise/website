import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.large}) {
    padding: 0 2rem;
  }
`

export const TabItems = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  margin-top: 1.5rem;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
    order: initial;
    margin-top: 0;
  }
`

export const Tab = styled.div<{ $isSelected: boolean }>`
  flex-grow: 1;
  text-align: center;
  border-top: 4px solid ${colors.white};
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  ${mixin.clickable}
  ${fontSizeMixins.fontSizeTextLg}
  font-weight: 600;
  color: ${colors.textDarkest};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-color: ${colors.primary};
    `}

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 0;
  }
`
