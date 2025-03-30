import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const ResourcesContainer = styled.div`
  @media (min-width: ${breakpoints.burgerMenu}) {
    width: 13rem;
  }
`

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
`

export const ResourcesLink = styled(Link)`
  position: relative;
  ${fontSizeMixins.fontSizeTextMd}
  font-weight: 600;
  position: relative;
  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};
  padding: 0.75rem 0;

  @media (min-width: ${breakpoints.burgerMenu}) {
    padding: 0.75rem 0.5rem;
    margin: 0 -0.5rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: ${colors.backgroundLightest};
    }
  }
`
