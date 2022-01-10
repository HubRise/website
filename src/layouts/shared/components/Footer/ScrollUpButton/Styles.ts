import styled from "styled-components"

import { colors, mixin } from "@utils/styles"

export const StyledButton = styled.button`
  position: absolute;
  top: -23px;
  right: 5%;
  width: 46px;
  height: 46px;
  background: ${colors.primary};
  border-radius: 50%;
  color: ${colors.white};
  font-size: 2rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${mixin.buttonOver(colors.white, colors.darkGray)};
`
