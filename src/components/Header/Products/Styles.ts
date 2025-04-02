import Link from "next/link"
import styled from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const ProductsList = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
`

export const Product = styled(Link)`
  display: flex;
  gap: 1.25rem;
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ProductTitle = styled.h4`
  color: ${colors.textDarkest};
  ${fontSizeMixins.fontSizeTextMd}
  font-weight: 600;

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`

export const ProductDescription = styled.p`
  ${fontSizeMixins.fontSizeTextSm}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextMd}
  }
`

export const ProductLink = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  ${fontSizeMixins.fontSizeTextSm}
  font-weight: 600;

  ${StyledIcon} {
    margin-left: 0.5rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextMd}
  }
`
