import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, fontSizes } from "@utils/styles"

import { Card } from "../shared/Styles"

export const TestimonialsWrapper = styled.div`
  max-width: ${breakpoints.biggest};
  padding: 0 10.5rem;
  margin: 3.875rem auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;

  ${Card} {
    &:nth-child(even) {
      position: relative;
      top: 1.75rem;
    }
  }

  @media (max-width: ${breakpoints.biggest}) {
    padding: 0 5rem;
  }
`

export const Name = styled.h4`
  font-size: ${fontSizes._24};
  line-height: 2rem;
  font-weight: 700;
  color: ${colors.textDarkest};
  margin-top: 1.5rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._18};
    line-height: 1.75rem;
  }
`

export const JobTitle = styled.h5`
  font-size: ${fontSizes._20};
  line-height: 1.875rem;
  margin-top: 0.25rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._16};
    line-height: 1.5rem;
  }
`

export const Text = styled.p`
  font-size: ${fontSizes._20};
  line-height: 1.875rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._16};
    line-height: 1.5rem;
  }
`

export const LogoImage = styled(Image)`
  position: relative;
  width: fit-content;
  height: 1.5rem;
  margin-left: auto;
  margin-top: auto;
`
