import styled from "styled-components"

import { StyledBreadcrumbs } from "@components/Breadcrumbs/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 3.5rem 1rem;
  margin-bottom: -3.5rem;
  text-align: center;

  ${StyledBreadcrumbs} {
    margin: 0 auto;
    width: fit-content;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 5rem;
  }
`

export const Title = styled.h1`
  ${fontSizeMixins.fontSizeDisplaySm}
  font-weight: 600;
  color: ${colors.textDarkest};
  text-transform: capitalize;
  margin-top: 1rem;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplayXl}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplay2Xl}
  }
`
