import Image from "next/image"
import styled from "styled-components"

import { breakpoints } from "@utils/styles"

export const Thumbnail = styled(Image)`
  border-radius: 0.6rem;
`

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 1rem;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ThumbnailItem = styled.div`
  width: 100%;
  cursor: pointer;
`
