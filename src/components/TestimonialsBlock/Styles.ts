import Image from "next/image"
import Link from "next/link"
import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const CardLink = styled(Link)`
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
      ${CardLink} {
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
        ${CardLink} {
          &:not(:nth-child(-n + ${$nbMobileDisplay})) {
            display: flex;
          }
        }
      `}
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    ${CardLink} {
      &:nth-child(even) {
        position: relative;
        top: 1.75rem;
      }
    }
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
