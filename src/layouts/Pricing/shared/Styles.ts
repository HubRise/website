import styled from "styled-components"

import { mixin } from "@utils/styles"

export const Title = styled.h3`
  ${mixin.cardTitle}
  margin-bottom: 0.25rem;
`

export const Description = styled.p`
  ${mixin.description}
  margin-top: 0;
`
