import styled from "styled-components"

import { breakpoints, colors } from "@utils/styles"
import { frontpageMixin } from "@layouts/frontpage/Styles"

export const Container = styled.section`
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem 0;
  align-items: center;
  justify-items: center;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 2rem;
    text-align: left;
  }
`

export const Title = styled.h3`
  ${frontpageMixin.title(colors.darkGray, colors.primary, true)};

  @media (min-width: ${breakpoints.large}) {
    ${frontpageMixin.title(colors.darkGray, colors.primary)};
  }
`

export const Description = styled.div`
  ${frontpageMixin.description(colors.lightGray)};
`

export const Image = styled.div`
  display: block;
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    margin: 3rem;
  }
`
