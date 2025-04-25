import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const Footer = styled.div`
  background-color: ${colors.white};
  color: ${colors.textDarkest};
`

export const FooterWrapper = styled.div`
  ${mixin.container};
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.large}) {
    padding-left: 0;
    padding-right: 0;
  }
`
export const IconButton = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.6rem;
  border-radius: 50%;
  background-color: ${colors.textMedium};
  color: ${colors.white};
  ${mixin.centerElement};
`

export const Title = styled.div`
  font-weight: 600;
`

export const TitleWrapper = styled.div<{ $isExpanded: boolean }>`
  display: inline-flex;
  align-items: center;

  ${mixin.clickable};

  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    ${IconButton} {
      background-color: ${colors.primary};
    }
    ${Title} {
      color: ${colors.primary};
    }
  }
`
