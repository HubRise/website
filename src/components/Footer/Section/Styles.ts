import Link from "next/link"
import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Header = styled.h4`
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
  ${fontSizeMixins.fontSizeTextMd};

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeTextLg};
  }
`

export const HeaderUnderline = styled.div`
  width: 5rem;
  height: 0.125rem;
  border-radius: 6.25rem;
  background-color: ${colors.borderMedium};
  margin-bottom: 1rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const Item = styled.li`
  ${fontSizeMixins.fontSizeTextSm};
`

const linkMixin = css`
  display: flex;
  align-items: center;
  color: ${colors.textLighter};
  ${mixin.linkOver(colors.white)}

  svg {
    width: 1.1rem;
    height: 1.1rem;
    fill: ${colors.white};
    margin-right: 0.5rem;
  }
`

export const ItemLink = styled(Link)`
  ${linkMixin}
`

export const ExternalLink = styled.a`
  ${linkMixin}
`
