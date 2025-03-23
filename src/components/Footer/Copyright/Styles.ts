import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const StyledCopyright = styled.div`
  background-color: ${colors.textDarkest};
  padding: 0 1rem;

  @media (min-width: ${breakpoints.medium}) {
    padding: 0;
  }
`

export const Container = styled.div`
  padding: 1.5rem 0 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ffffff33;

  @media (min-width: ${breakpoints.medium}) {
    ${mixin.container};
  }
`

export const Text = styled.span`
  color: ${colors.textLighter};
  ${fontSizeMixins.fontSizeTextSm}

  a {
    ${mixin.linkOver(colors.white)}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`
