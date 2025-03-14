import Image from "next/image"
import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const TestimonialsWrapper = styled.div`
  max-width: ${breakpoints.biggest};
  margin: 3.5rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${StyledCard} {
    &:not(:nth-child(-n + 2)) {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    ${StyledCard} {
      &:not(:nth-child(-n + 2)) {
        display: flex;
      }
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0 5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    ${StyledCard} {
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
  ${fontSizeMixins.fontSizeTextLg}
  font-weight: 700;
  color: ${colors.textDarkest};
  margin-top: 1.5rem;

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

export const JobTitle = styled.h5`
  ${mixin.cardText}
  margin-top: 0.25rem;
`

export const Text = styled.p`
  ${mixin.cardText}
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
`

export const LogoImage = styled(Image)`
  position: relative;
  width: fit-content;
  height: 1.5rem;
  margin-left: auto;
  margin-top: auto;
`
