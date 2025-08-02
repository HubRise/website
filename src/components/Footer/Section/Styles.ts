import Link from "next/link"
import styled, { css } from "styled-components"

import { colors, fontSizes, mixin } from "@utils/styles"

export const Header = styled.h4`
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
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
  font-size: ${fontSizes._14};
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
