import styled from "styled-components"

import { breakpoints, colors } from "@utils/styles"

export const Container = styled.div`
  height: 41rem;
  background-color: ${colors.backgroundLightest};
  padding: 5.625rem 0;
`

export const InnerContainer = styled.div`
  max-width: ${breakpoints.biggest};
  margin: 0 auto;
`
