import Link from "next/link"
import styled, { css } from "styled-components"

import { colors, fontSizes, mixin } from "@utils/styles"

export const BlockContent = styled.div`
  font-size: ${fontSizes._18};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const linkStyle = css`
  color: ${colors.primary};
  ${mixin.linkOver(colors.textDarkest)};
  &::before,
  &::after {
    content: "\\00a0"; // &nbsp;
  }
`

export const BlockContentButton = styled.button`
  ${linkStyle};
`

export const BlockContentLink = styled(Link)`
  ${linkStyle};
`
