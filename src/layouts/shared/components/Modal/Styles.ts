import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin, sizes, zIndexValues } from "@utils/styles"

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
  width: 100vw;
  padding: 2.5rem;
  border-radius: ${sizes.borderRadius};
  background: #f5f5f5;
  z-index: ${zIndexValues.modal};
  position: relative;

  @media (min-width: ${breakpoints.medium}) {
    max-width: 50rem;
    margin: 0 auto;
  }
`

export const Title = styled.h5`
  color: ${colors.textDarkest};
  font-weight: 700;
  font-size: ${fontSizes._24};
  margin-bottom: 1rem;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0 ${sizes.borderRadius} 0 ${sizes.borderRadius};
  color: ${colors.white};
  background-color: ${colors.primary};
  ${mixin.linkOver(colors.white)};
  cursor: pointer;
  ${mixin.centerElement};
`
