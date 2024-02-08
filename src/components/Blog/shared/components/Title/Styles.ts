import styled from "styled-components"

import { colors, fontSizes, lineHeights } from "@utils/styles"

export const StyledTitle = styled.div`
  color: ${colors.textDarkest};
  font-weight: 700;
  position: relative;
  font-size: ${fontSizes._32};
  line-height: ${lineHeights.comfortable};
  margin-bottom: 1.5rem;

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
