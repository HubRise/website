import Image from "next/image"
import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const MapContainer = styled.div`
  position: relative;

  ${StyledCard} {
    margin: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    ${StyledCard} {
      margin: 0;
      max-width: 30rem;
      position: absolute;
      top: 6rem;
      right: 6rem;
      z-index: 1;
    }
  }
`

export const MapWrapper = styled.div`
  height: 20rem;

  @media (min-width: ${breakpoints.large}) {
    height: 50rem;
  }
`

export const AddressImage = styled(Image)`
  margin: 1rem 0;
`

export const AddressWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

export const AddressText = styled.span`
  ${fontSizeMixins.fontSizeTextMd};
  font-weight: 600;
  color: ${colors.primary};
`
