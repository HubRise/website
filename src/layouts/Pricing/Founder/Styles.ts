import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, fontSizes, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  ${mixin.containerWrapper}

  @media (min-width: ${breakpoints.large}) {
    display: flex;
    gap: 1.25rem;
  }
`

export const ImageWrapper = styled(Image)`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  background-color: ${colors.backgroundWhite};
  display: block;
  margin: 0 auto;
`

export const Content = styled.div`
  color: ${colors.white};
`

export const Name = styled.h4`
  font-size: ${fontSizes._24};
  font-weight: 600;
  margin-top: 1.5rem;
`

export const JobTitle = styled.h5`
  ${mixin.cardText}
  margin-top: 0.25rem;
`

export const Text = styled.p`
  ${mixin.cardText}
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin-top: 2rem;
`
