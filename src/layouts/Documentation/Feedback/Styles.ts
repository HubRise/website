import styled from "styled-components"

import { colors, mixin } from "@utils/styles"

export const Footer = styled.div`
  background-color: ${colors.backgroundWhite};
  color: ${colors.textDarkest};
`

export const FooterWrapper = styled.div`
  ${mixin.containerWrapper};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
