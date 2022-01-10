import styled from "styled-components"

import { ToastVariant } from "@layouts/shared/components/Toast/helpers"
import { colors } from "@utils/styles"

export const ToastGroup = styled.div`
  top: 1.25rem;
  right: 1.25rem;
  z-index: 9999;
  position: fixed;
  padding: 0.25rem;
  box-sizing: border-box;
  color: #fff;
`

export const StyledToast = styled.div<{ $variant: ToastVariant }>`
  width: 25rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  font-size: 0.875rem;
  border-radius: 3px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: fade-in 300ms;
  color: ${colors.white};
  background-color: ${(props) => (props.$variant === "success" ? colors.primary : "red")};
`

export const Icon = styled.div`
  flex: 0 0 2.5rem;
  display: flex;
  justify-content: center;
  margin-right: 1.25rem;
  font-size: 2.5rem;
  align-items: center;
`

export const Content = styled.div`
  flex: 1;
`

export const Title = styled.span`
  display: block;
  font-weight: 500;
  line-height: 1.75rem;
  margin-bottom: 0.3125rem;
  font-size: 1.125rem;
`

export const Description = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  line-height: 1.3125rem;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem;
  text-align: center;
  font-size: 1.125rem;
  cursor: pointer;
`
