import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const Wrapper = styled.div`
  @media (min-width: ${breakpoints.large}) {
    padding: 0 5rem;
  }
`

export const InnerWrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    display: flex;
    gap: 1.25rem;
  }
`

export const ImageWrapper = styled(Image)`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  background-color: ${colors.white};
  display: block;
  margin: 0 auto;
`

export const Content = styled.div`
  color: ${colors.white};
`

export const Name = styled.h4`
  ${fontSizeMixins.fontSizeTextLg}
  font-weight: 700;
  margin-top: 1.5rem;

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

export const JobTitle = styled.h5`
  ${fontSizeMixins.fontSizeTextMd}
  margin-top: 0.25rem;

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextXl}
  }
`

export const Text = styled.p`
  font-family: "Inter", sans-serif;
  ${fontSizeMixins.fontSizeTextMd}
  font-weight: 600;
  margin-top: 2rem;

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextXl}
  }
`
