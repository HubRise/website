import styled, { StyledComponent } from "styled-components"

import type { Header } from "."

import { colors } from "@utils/styles"

export const StyledHeader = (header: Header): StyledComponent<Header, any> => styled(header)`
  scroll-snap-align: start;
  scroll-margin-top: 1rem;

  :hover a {
    color: ${colors.primary};

    :hover {
      color: ${colors.textDarkest};
    }
  }
`

export const Anchor = styled.a`
  color: transparent;
  padding: 0 0.5rem;
  vertical-align: middle;

  ::after {
    content: "#";
  }
`
