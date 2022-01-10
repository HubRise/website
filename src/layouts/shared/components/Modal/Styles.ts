import styled from "styled-components"

import { breakpoints, colors, mixin, zIndexValues } from "@utils/styles"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndexValues.modalOverlay};
  display: grid;
  place-items: center;
  overflow-y: auto;
  background-color: rgba(10, 10, 10, 0.45);
`

export const StyledModal = styled.div`
  width: 600px;
  padding: 2.5rem;
  border-radius: 3px;
  border: none;
  background: #f5f5f5;
  z-index: ${zIndexValues.modal};
  position: relative;

  @media (max-width: ${breakpoints.medium}) {
    max-width: 100vw;
    margin: 0 auto;
    height: auto;
    min-height: auto;
  }
`

export const Title = styled.h5`
  color: ${colors.darkGray};
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 0;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: ${colors.primary};
  border-radius: 0 2px 0 0;
  width: 30px;
  height: 30px;
  color: ${colors.white};
  text-align: center;
  font-size: 2em;
  line-height: 1;
  cursor: pointer;

  ${mixin.linkOver(colors.white)};
`

export const CloseButtonIcon = styled.i`
  font-size: 1.3rem;
  top: 4px;
  position: absolute;
  right: 6px;
`
