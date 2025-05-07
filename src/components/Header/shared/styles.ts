import { css } from "styled-components"

import { colors, sizes, zIndexValues } from "@utils/styles"

export const headerStyle = css<{ $isIntegrationsNavSticky: boolean }>`
  height: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  background-color: ${colors.backgroundWhite};

  ${({ $isIntegrationsNavSticky }) =>
    $isIntegrationsNavSticky
      ? css`
          border-bottom: 3px solid ${colors.primary};
        `
      : css`
          border-bottom: 3px solid ${colors.headerBorder};
        `}
`
