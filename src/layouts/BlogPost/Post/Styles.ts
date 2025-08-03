import Image from "next/image"
import styled from "styled-components"

import { StyledDateAndAuthor } from "@components/DateAndAuthor/Styles"
import { breakpoints, colors, fontSizeMixins, fontSizes, lineHeights } from "@utils/styles"

export const StyledPost = styled.div`
  padding-bottom: 3.5rem;

  ${StyledDateAndAuthor} {
    ${fontSizeMixins.text18};
  }

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 5.5rem;
  }
`

export const Title = styled.h1`
  font-size: ${fontSizes._32};
  line-height: ${lineHeights.compact};
  font-weight: 700;
  color: ${colors.textDarkest};
  margin-top: 0.5rem;
`

export const BannerImage = styled(Image)`
  margin-bottom: 3.5rem;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
  }
`
