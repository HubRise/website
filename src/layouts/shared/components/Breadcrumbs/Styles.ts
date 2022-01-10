import styled from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin, sizes } from "@utils/styles"

export const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  max-width: 75rem;
  margin: calc(${sizes.blockPadding} - 1rem) auto calc(-${sizes.blockPadding} + 1rem) auto;
`

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-left: unset;
  padding-left: 1rem;
`

export const Item = styled.li`
  position: relative;
  margin-right: 0.5rem;
  font-size: 0.8125rem;
  color: ${colors.darkGray};

  &::after {
    content: ">";
    margin-left: 0.5rem;
  }

  &:last-of-type {
    color: ${colors.lightGray};

    &::after {
      content: "";
    }
  }
`

export const ItemLink = styled(Link)`
  color: ${colors.darkGray};

  ${mixin.linkOver(colors.primary)};
`
