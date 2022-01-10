import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"
import { frontpageMixin } from "@layouts/frontpage/Styles"
import Link from "@layouts/shared/components/Link"

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

export const Text = styled.div`
  @media (min-width: ${breakpoints.large}) {
    grid-row: 1;
    grid-column: 2;
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

export const List = styled.ul`
  ${frontpageMixin.description(colors.lightGray)};
`

export const Item = styled.li`
  ${mixin.dotSeparatedList("0.5rem")};
`

export const ImageDefault = styled.div`
  max-width: 100%;
  z-index: 0;
  filter: drop-shadow(5px 5px 10px #eee);
`

export const ImageOver = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s linear;
`

export const ImageLink = styled(Link)`
  display: block;
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    grid-row: 1;
    grid-column: 1;
    margin: 3rem;
  }

  :hover {
    ${ImageOver} {
      opacity: 1;
    }
  }
`
