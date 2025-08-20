import Link from "next/link"
import styled, { css } from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const Content = styled.div`
  ${mixin.responsiveText};
  margin: 1rem 0 -1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${breakpoints.large}) {
    margin: 1rem 0 -3rem;
  }
`

const linkCss = css`
  color: ${colors.primary};
  ${mixin.linkOver(colors.textDarkest)};
  &::before,
  &::after {
    content: "\\00a0"; // &nbsp;
  }
`

export const ContentButton = styled.button`
  ${linkCss};
`

export const ContentLink = styled(Link)`
  ${linkCss};
`
