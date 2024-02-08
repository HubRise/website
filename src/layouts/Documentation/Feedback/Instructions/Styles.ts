import styled from "styled-components"

import { colors, mixin } from "@utils/styles"

export const StyledInstructions = styled.div``

export const Description = styled.div``

export const List = styled.ul`
  margin-top: 0.35rem;
`

export const ListItem = styled.li`
  position: relative;
  margin-left: 0.75rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.75rem;
    transform: translateY(-50%);
    left: -0.75rem;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: ${colors.textDarkest};
  }
`

export const ItemLink = styled.a`
  margin: auto 0.2rem;
  color: ${colors.primary};
  ${mixin.linkOver(colors.textDarkest)};
`
