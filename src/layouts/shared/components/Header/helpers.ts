import { css } from "styled-components"

import { colors, sizes, zIndexValues } from "@utils/styles"

export interface IHeaderLink {
  title: string
  to: string
  mobile_only?: boolean
}

export const headerStyle = css`
  height: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  background-color: ${colors.white};
  border-bottom: 3px solid ${colors.primary};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
`
