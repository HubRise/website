import styled from "styled-components"

import { colors } from "@utils/styles"

export const Main = styled.main`
  background-color: ${colors.backgroundLight};
  // Prevent margin collapse
  border-top: thin solid transparent;
  border-bottom: thin solid transparent;
`
