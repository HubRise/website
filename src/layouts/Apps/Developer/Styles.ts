import styled from "styled-components"

import { breakpoints, fontSizeMixins } from "@utils/styles"

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 75rem;
  margin: 0 auto;

  p {
    ${fontSizeMixins.fontSizeTextMd}

    @media (min-width: ${breakpoints.large}) {
      ${fontSizeMixins.fontSizeTextXl}
    }
  }
`
