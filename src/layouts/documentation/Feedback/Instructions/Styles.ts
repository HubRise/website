import styled from "styled-components"

import { Section as OriginalSection } from "../Styles"

import { colors, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const Section = styled(OriginalSection)`
  position: relative;
  background-color: #fbfbfb;
  display: grid;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fbfbfb;
  }

  &::before {
    right: 100%;
  }

  &::after {
    left: 100%;
  }
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

export const ItemLink = styled(Link)`
  margin: auto 0.2rem;
  ${mixin.linkOver(colors.textDarkest)};
`
