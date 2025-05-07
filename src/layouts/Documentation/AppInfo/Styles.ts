import styled from "styled-components"

import { colors, lineHeights } from "@utils/styles"

export const StyledAppInfo = styled.div`
  color: ${colors.textDark};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Item = styled.div`
  display: inline;
  line-height: ${lineHeights.compact};
`

export const Label = styled.span``

export const Value = styled.span`
  margin-left: 0.5rem;
  font-weight: 500;
`

export const LinkValue = styled.a``
