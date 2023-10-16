import styled from "styled-components"

import { fontSizes, colors, sizes } from "@utils/styles"

export const StyledNoResults = styled.div`
  min-height: 30rem;
  max-width: ${sizes.maxWidth};
  width: 100%;
  margin: 0 auto;
  color: ${colors.textDarkest};
  font-size: ${fontSizes._24};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`
