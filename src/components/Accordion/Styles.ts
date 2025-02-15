import styled from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { colors, fontSizes } from "@utils/styles"

export const Container = styled.div`
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

export const TitleWrapper = styled.div<{ $isCollapsed: boolean | undefined }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  ${StyledIcon} {
    transform: ${({ $isCollapsed }) => $isCollapsed && `rotate(180deg)`};
  }
`

export const Title = styled.h4`
  font-size: ${fontSizes._18};
  line-height: 1.625rem;
  font-weight: 600;
`

export const ContentWrapper = styled.div<{ $maxHeight: number | undefined }>`
  max-height: ${({ $maxHeight }) => `${$maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`

export const Content = styled.div`
  font-size: ${fontSizes._16};
  line-height: 1.5rem;
  margin-top: 0.25rem;
`
