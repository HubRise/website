import styled from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { colors, fontSizeMixins, mixin } from "@utils/styles"

export const StyledAccordion = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  color: ${colors.textDarkest};
  border-bottom: 1px solid ${colors.borderLight};

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`

export const TitleWrapper = styled.div<{ $isExpanded: boolean | undefined }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mixin.clickable}

  ${StyledIcon} {
    transform: ${({ $isExpanded }) => $isExpanded && `rotate(180deg)`};
  }
`

export const Title = styled.h4`
  ${fontSizeMixins.fontSizeTextLg}
  font-weight: 600;
`

export const ContentWrapper = styled.div<{ $maxHeight: number | undefined }>`
  max-height: ${({ $maxHeight }) => `${$maxHeight}px`};
  transition: max-height 0.1s ease-in-out;
  overflow: hidden;
`

export const Content = styled.div`
  ${fontSizeMixins.fontSizeTextMd}
  margin-top: 0.25rem;
`
