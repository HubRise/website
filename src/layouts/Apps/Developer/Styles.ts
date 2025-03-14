import styled from "styled-components"

import { mixin } from "@utils/styles"

export const Description = styled.div`
  ${mixin.description}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 75rem;
  margin: 0 auto;
`
