import styled, { css, FlattenSimpleInterpolation } from "styled-components"

import { breakpoints, colors } from "@utils/styles"
import { frontpageMixin } from "@layouts/frontpage/Styles"

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.large}) {
    ${frontpageMixin.row};
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 1rem;
  }
`

const column = css`
  text-align: center;
  position: relative;
  padding: 2rem 1rem;
  background-color: ${colors.white};

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
    text-align: left;
  }
`

const columnExtension = (column: 1 | 2): FlattenSimpleInterpolation => css`
  @media (min-width: ${breakpoints.xLarge}) {
    position: absolute;
    top: 0;
    ${column === 1
      ? css`
          right: 100%;
        `
      : css`
          left: 100%;
        `};
    height: 100%;
    content: "";
    background-color: ${colors.white};
    width: 9999px;
  }
`

export const Column1 = styled.div`
  ${column};
  margin-bottom: 1.5rem;
  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 0;
  }

  :before {
    ${columnExtension(1)};
  }
`

export const Column2 = styled.div`
  ${column};

  :after {
    ${columnExtension(2)};
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
