import styled from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { colors, mixin } from "@utils/styles"

export const StyledAppInfo = styled.div`
  color: ${colors.textDark};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.span``

export const Value = styled.span`
  margin-left: 0.5rem;
  font-weight: 500;
`

export const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #4ca30d1a;
  border-radius: 100%;
  margin-right: 0.625rem;
  ${mixin.centerElement}

  ${StyledIcon} {
    color: ${colors.primary};
  }
`

export const LinkValue = styled.a``
