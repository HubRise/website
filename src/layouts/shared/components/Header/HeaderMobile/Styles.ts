import styled from "styled-components"

import { headerStyle } from "../helpers"

import { breakpoints } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  ${headerStyle};

  @media (min-width: ${breakpoints.burgerMenu}) {
    display: none;
  }
`

export const Button = styled.div`
  padding: 2em 2em 2em 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const Logo = styled.div`
  flex: 1;
  text-align: center;
`

export const LogoLink = styled(Link)`
  padding: 2em 2em;
`
