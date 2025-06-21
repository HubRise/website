import Image from "next/image"
import styled from "styled-components"

import { StyledDateAndAuthor } from "@components/DateAndAuthor/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const StyledPost = styled.div`
  padding-bottom: 3.5rem;

  ${StyledDateAndAuthor} {
    ${fontSizeMixins.fontSizeTextLg}
  }

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 5.5rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${StyledDateAndAuthor} {
      ${fontSizeMixins.fontSizeTextXl}
    }
  }
`

export const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: ${colors.textDarkest};
  margin-top: 0.5rem;

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 2.125rem;
    line-height: 2.75rem;
  }
`

export const BannerImage = styled(Image)`
  margin-top: 1.25rem;
  margin-bottom: 3.5rem;
  width: 100%;

  @media (min-width: ${breakpoints.large}) {
    margin-top: 2.75rem;
    margin-bottom: 5.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
  }
`
