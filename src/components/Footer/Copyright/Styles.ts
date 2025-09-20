import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const StyledCopyright = styled.div`
  background-color: ${colors.backgroundDark};
  padding: 0 1rem;

  @media (min-width: ${breakpoints.large}) {
    padding: 0;
  }
`

export const Container = styled.div`
  min-height: 5rem;
  ${mixin.containerWrapper}
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  color: ${colors.textLighter};

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const Text = styled.span`
  order: 1;

  @media (min-width: ${breakpoints.medium}) {
    order: initial;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    ${mixin.linkOver(colors.white)}
  }
`
