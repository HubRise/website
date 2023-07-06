import styled from "styled-components"

import { colors } from "@utils/styles"

export const StyledDetails = styled.details`
  cursor: pointer;
  margin: 1rem 0 2rem 0;

  summary {
    margin-bottom: 1rem;
    color: ${colors.textDarkest};
  }
`
