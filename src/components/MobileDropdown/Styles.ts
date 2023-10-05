import styled, { css } from "styled-components"

import Icon from "@components/Icon"
import { boxShadows, colors, iconSizes, zIndexValues } from "@utils/styles"

export const Dropdown = styled.div`
  border-top: thin solid ${colors.textLighter};
  border-bottom: thin solid ${colors.textLighter};
  box-shadow: ${boxShadows.small};
  background-color: ${colors.backgroundWhite};
`

export const Title = styled.h5<{ $isExpanded?: boolean }>`
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.textDarkest};
  font-weight: bold;
  cursor: pointer;

  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      border-bottom: thin solid ${colors.primary};
    `}
`

export const List = styled.ul<{ $isExpanded?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${zIndexValues.header};
  padding: 0;

  background-color: ${colors.backgroundWhite};
  border-bottom: thin solid ${colors.primary};
  box-shadow: ${boxShadows.medium};

  ${({ $isExpanded }) =>
    !$isExpanded &&
    css`
      display: none;
    `}
`

export const ArrowIcon = styled(Icon).attrs({ size: iconSizes._32 })`
  color: ${colors.primary};
  cursor: pointer;
`
