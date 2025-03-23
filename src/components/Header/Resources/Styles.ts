import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, fontSizes, mixin } from "@utils/styles"

export const ResourcesTitle = styled.h4`
  color: ${colors.textDarkest};
  ${fontSizeMixins.fontSizeTextMd}
  font-weight: 600;
  display: none;

  @media (min-width: ${breakpoints.burgerMenu}) {
    display: block;
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`

export const ResourcesDescription = styled.p`
  color: ${colors.textDark};
  ${fontSizeMixins.fontSizeTextSm}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextMd}
  }
`

export const ResourcesLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.burgerMenu}) {
    flex-direction: row;
    gap: 3rem;
    margin-top: 1.25rem;
  }
`

export const ResourcesLink = styled(Link)`
  ${fontSizeMixins.fontSizeTextMd}
  font-weight: 600;
  position: relative;
  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};
  padding: 0.75rem 0;

  @media (min-width: ${breakpoints.burgerMenu}) {
    padding: 0;

    &::after {
      content: "•";
      font-size: ${fontSizes._24};
      color: ${colors.primary};
      position: absolute;
      right: -1.8rem;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`
