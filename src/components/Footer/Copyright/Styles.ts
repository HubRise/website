import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

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
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const Text = styled.span`
  color: ${colors.textLighter};
  ${fontSizeMixins.fontSizeTextSm}
  order: 1;

  @media (min-width: ${breakpoints.medium}) {
    order: initial;
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`

export const Links = styled.div`
  color: ${colors.textLighter};
  ${fontSizeMixins.fontSizeTextSm}
  display: flex;
  gap: 0.75rem;

  a {
    ${mixin.linkOver(colors.white)}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`
