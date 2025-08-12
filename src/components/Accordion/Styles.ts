import styled, { css } from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { colors, mixin } from "@utils/styles"

export const StyledAccordion = styled.div`
  border-bottom: 1px solid ${colors.borderLight};

  &:last-child {
    border-bottom: none;
  }
`

export const Title = styled.h4`
  font-weight: 600;
`

export const ContentWrapper = styled.div<{ $maxHeight: number | undefined; $isExpanded: boolean | undefined }>`
  max-height: ${({ $maxHeight }) => $maxHeight && `${$maxHeight + 4}px`};
  transition: max-height 0.1s ease-in-out;
  overflow: hidden;
  margin-bottom: ${({ $isExpanded }) => $isExpanded && `1rem`};
`

export const Content = styled.div`
  margin-top: 0.25rem;
`

export const expandIconWrapperMixin = css`
  width: 2.75rem;
  height: 2.75rem;
  ${mixin.centerElement}
  ${mixin.clickable}
  border-radius: 0.5rem;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${colors.backgroundDarker};

    ${StyledIcon} {
      color: ${colors.white};
    }
  }
`

export const ExpandIconWrapper = styled.div`
  ${expandIconWrapperMixin}
`

export const TitleWrapper = styled.div<{ $isExpanded: boolean | undefined }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mixin.clickable}
  padding-top: 1rem;
  padding-bottom: ${({ $isExpanded }) => !$isExpanded && `1rem`};

  ${StyledIcon} {
    transform: ${({ $isExpanded }) => $isExpanded && `rotate(180deg)`};
  }

  &:hover ${ExpandIconWrapper} {
    background-color: ${colors.backgroundLight};
  }
`
