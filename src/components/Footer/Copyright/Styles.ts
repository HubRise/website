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
  ${mixin.containerWrapper}
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ffffff33;
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
