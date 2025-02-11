import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, fontSizes } from "@utils/styles"

import { Card } from "../shared/Styles"

export const TestimonialsWrapper = styled.div`
  max-width: ${breakpoints.biggest};
  margin: 3.5rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${Card} {
    &:not(:nth-child(-n + 2)) {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    ${Card} {
      &:not(:nth-child(-n + 2)) {
        display: flex;
      }
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0 5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    ${Card} {
      &:nth-child(even) {
        position: relative;
        top: 1.75rem;
      }
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    padding: 0 10.5rem;
  }
`

export const Name = styled.h4`
  font-size: ${fontSizes._18};
  line-height: 1.75rem;
  font-weight: 700;
  color: ${colors.textDarkest};
  margin-top: 1.5rem;

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._24};
    line-height: 2rem;
  }
`

export const JobTitle = styled.h5`
  font-size: ${fontSizes._16};
  line-height: 1.5rem;
  margin-top: 0.25rem;

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
  }
`

export const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${fontSizes._16};
  line-height: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
  }
`

export const LogoImage = styled(Image)`
  position: relative;
  width: fit-content;
  height: 1.5rem;
  margin-left: auto;
  margin-top: auto;
`
