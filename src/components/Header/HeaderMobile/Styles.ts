import Link from "next/link"
import styled from "styled-components"

import { breakpoints, mixin } from "@utils/styles"

import { headerStyle } from "../shared/styles"

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  ${headerStyle};

  @media (min-width: ${breakpoints.burgerMenu}) {
    display: none;
  }
`

export const Button = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4rem; // Large clickable area
  display: flex;
  align-items: center;
  ${mixin.clickable};

  &:focus {
    outline: none;
  }
`

export const LogoLink = styled(Link)`
  height: 100%;
  ${mixin.centerElement};
`
