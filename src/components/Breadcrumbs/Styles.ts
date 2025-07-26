import Link from "next/link"
import styled from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
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
  font-weight: 500;
  color: ${colors.textDark};
  white-space: nowrap;
  text-transform: capitalize;

  &::after {
    content: ">";
    margin: 0 1rem;
    color: ${colors.textLighter};
    font-size: ${fontSizes._18};
    vertical-align: middle;
  }

  &:last-of-type {
    color: #344054;
    font-weight: 600;

    &::after {
      content: "";
      margin: 0;
    }
  }
`

export const ItemLink = styled(Link)`
  ${mixin.linkOver(colors.primary)};

  ${StyledIcon} {
    vertical-align: middle;
  }
`
