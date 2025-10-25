import OriginalLink from "next/link"
import styled from "styled-components"

import { breakpoints, mixin } from "@utils/styles"

export const StyledThumbList = styled.div`
  ${mixin.containerWrapper}
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Link = styled(OriginalLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

export const Content = styled.div`
  text-align: center;
`

export const Title = styled.h4`
  ${mixin.smallCardTitle}
`

export const Description = styled.p`
  ${mixin.cardText}
`
