import styled from "styled-components"

import { ToastVariant } from "@layouts/shared/components/Toast/helpers"
import { boxShadows, colors, fontSizes, mixin, sizes, zIndexValues } from "@utils/styles"

export const ToastGroup = styled.div`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: ${zIndexValues.toast};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StyledToast = styled.div<{ $variant: ToastVariant }>`
  width: 25rem;
  padding: 1.25rem;
  position: relative;
  display: flex;
  gap: 1.25rem;
  border-radius: ${sizes.borderRadius};
  box-shadow: ${boxShadows.large};
  animation: fade-in 300ms;
  color: ${colors.white};
  background-color: ${(props) => (props.$variant === "success" ? colors.primary : "red")};
`

export const Side = styled.div`
  width: 2.5rem;
  ${mixin.centerElement};
`

export const Content = styled.div`
  flex: 1;
  font-size: ${fontSizes._14};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const Title = styled.div`
  font-size: ${fontSizes._18};
  font-weight: 500;
`

export const Description = styled.p``

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  ${mixin.centerElement};
  cursor: pointer;
  color: ${colors.white};
`
