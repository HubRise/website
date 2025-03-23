import { css } from "styled-components"

import { colors, sizes, zIndexValues } from "@utils/styles"

export const headerStyle = css`
  height: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  background-color: ${colors.white};
  border-bottom: 3px solid #4ca30d80;
`
