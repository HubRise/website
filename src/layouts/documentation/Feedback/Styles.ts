import styled, { css } from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const StyledFeedback = styled.div`
  background-color: ${colors.white};
  color: ${colors.textDarkest};
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem 1rem;
  ${mixin.container};

  @media (min-width: ${breakpoints.large}) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const TitleWrapper = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.$isExpanded &&
    css`
      color: ${colors.primary};
    `}

  ${mixin.linkOver(colors.primary)};

  &:hover {
    cursor: pointer;
  }
`

export const IconButton = styled.button<{ $isExpanded: boolean }>`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.6rem;
  border-radius: 50%;
  background-color: ${(props) => (props.$isExpanded ? colors.primary : colors.textMedium)};
  color: ${colors.white};
  ${mixin.centerElement};
`

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 0;
`
