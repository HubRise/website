import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

export const StyledBreadcrumbs = styled.ul`
  max-width: ${sizes.maxWidth};
  margin: calc(${sizes.blockVerticalPadding} - 1rem) auto calc(-${sizes.blockVerticalPadding} + 1rem) auto;
  padding: 0 ${sizes.mobilePadding};
  @media (min-width: ${breakpoints.large}) {
    padding: 0 ${sizes.desktopPadding};
  }

  display: flex;
  overflow: auto hidden;
`

export const Item = styled.li`
  font-size: ${fontSizes._14};
  color: ${colors.textDarkest};
  white-space: nowrap;

  &::after {
    content: ">";
    margin: 0 0.5rem;
  }

  &:last-of-type {
    color: ${colors.textMedium};

    &::after {
      content: "";
    }
  }
`

export const ItemLink = styled(Link)`
  color: ${colors.textDarkest};
  ${mixin.linkOver(colors.primary)};
`
