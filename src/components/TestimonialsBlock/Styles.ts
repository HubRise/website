import Image from "next/image"
import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

export const CardWrapper = styled.div`
  display: flex;
`

export const TestimonialsWrapper = styled.div<{ $nbMobileDisplay: number }>`
  ${mixin.containerWrapper}
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${({ $nbMobileDisplay }) =>
    $nbMobileDisplay &&
    css`
      ${CardWrapper} {
        &:not(:nth-child(-n + ${$nbMobileDisplay})) {
          display: none;
        }
      }
    `}

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    ${({ $nbMobileDisplay }) =>
      $nbMobileDisplay &&
      css`
        ${CardWrapper} {
          &:not(:nth-child(-n + ${$nbMobileDisplay})) {
            display: flex;
          }
        }
      `}
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    ${CardWrapper} {
      &:nth-child(even) {
        position: relative;
        top: 1.75rem;
      }
    }
  }
`

export const Name = styled.h4`
  font-size: ${fontSizes._19};
  font-weight: 600;
  color: ${colors.textDarkest};
  margin-top: 1.5rem;
`

export const JobTitle = styled.h5`
  font-size: ${fontSizes._16};
`

export const Quote = styled.p`
  ${mixin.cardText}
  font-family: "Inter", sans-serif;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
`

export const LogoImage = styled(Image)`
  position: relative;
  width: fit-content;
  max-width: 7.5rem;
  max-height: 4rem;
  margin-left: auto;
  margin-top: auto;
`
