import styled from "styled-components"

import { colors, fontSizes, mixin } from "@utils/styles"

export const StyledButton = styled.button`
  position: absolute;
  top: -23px;
  right: 5%;
  width: 3rem;
  height: 3rem;
  background: ${colors.primary};
  border-radius: 50%;
  color: ${colors.white};
  font-size: ${fontSizes._32};
  cursor: pointer;

  ${mixin.centerElement};

  &:focus {
    outline: none;
  }

  ${mixin.buttonOver(colors.white, colors.backgroundDark)};
`
