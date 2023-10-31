import styled from "styled-components"

import { colors } from "@utils/styles"

import { HeaderLevel } from "./types"

const styledHeader = (level: HeaderLevel) => styled(level)`
  scroll-snap-align: start;
  scroll-margin-top: 1rem;

  &:hover a {
    color: ${colors.primary};

    &:hover {
      color: ${colors.textDarkest};
    }
  }
`

export const StyledHeader = {
  h1: styledHeader("h1"),
  h2: styledHeader("h2"),
  h3: styledHeader("h3"),
  h4: styledHeader("h4"),
  h5: styledHeader("h5"),
  h6: styledHeader("h6"),
}

export const Anchor = styled.a`
  color: transparent;
  padding: 0 0.5rem;
  vertical-align: middle;

  &:after {
    content: "#";
  }
`
