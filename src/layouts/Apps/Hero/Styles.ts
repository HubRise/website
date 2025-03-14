import styled from "styled-components"

import { breakpoints, fontSizeMixins } from "@utils/styles"

export const Content = styled.div`
  margin: 1rem 0 -1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    ${fontSizeMixins.fontSizeTextMd}
  }

  @media (min-width: ${breakpoints.large}) {
    margin: 1rem 0 -3rem;

    p {
      ${fontSizeMixins.fontSizeTextXl}
    }
  }
`
