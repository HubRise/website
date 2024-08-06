import styled from "styled-components"

import { colors, lineHeights } from "@utils/styles"

export const StyledTitle = styled.h1`
  color: ${colors.textDarkest};
  font-weight: 700;
  position: relative;
  line-height: ${lineHeights.comfortable};

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: inherit;
    top: 100%;
    margin: 5px auto;
    width: 15%;
    height: 3px;
    background: ${colors.primary};
  }
`
