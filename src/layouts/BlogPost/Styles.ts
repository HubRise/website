import styled from "styled-components"

import { StyledBreadcrumbs } from "@components/Breadcrumbs/Styles"
import { breakpoints, colors, sizes } from "@utils/styles"

export const BlogPostWrapper = styled.div`
  background-color: ${colors.backgroundWhite};
  padding: 0 1rem;

  @media (min-width: ${breakpoints.large}) {
    padding: 0;
  }
`

export const BlogPostContainer = styled.div`
  max-width: ${sizes.maxWidth};
  margin: 0 auto;
  padding-top: 3.5rem;

  @media (min-width: ${breakpoints.large}) {
    padding-top: 5.5rem;
  }

  ${StyledBreadcrumbs} {
    margin: 0;
    padding: 0;
  }
`
