import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

import { colors, mixin } from "@utils/styles"

export const Content = styled.div`
  ${mixin.responsiveText};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContentLink = styled(Link)`
  color: ${colors.primary};
  ${mixin.linkOver(colors.textDarkest)};
`

export const StyledImage = styled(Image)`
  margin: 2rem 0;
`
