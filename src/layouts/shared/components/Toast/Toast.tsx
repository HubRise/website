import * as React from "react"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { animate, getIcon, IToast } from "./helpers"
import { StyledToast, Content, Description, Title, CloseButton, Icon } from "./Styles"

type ToastProps = {
  toast: IToast
  onClose: (id: number) => void
}

const Toast = ({ toast, onClose }: ToastProps): JSX.Element => {
  const toastRef = React.useRef<HTMLDivElement>(null)

  const hideToast = React.useCallback(() => {
    const draw = (progress: number) => {
      if (toastRef.current) {
        toastRef.current.style.opacity = String(1 - progress)
      }
    }
    animate(draw, 300).then(() => onClose(toast.id))
  }, [toast.id, onClose])

  React.useEffect(() => {
    if (!toast.timeout) return

    const timeoutId = setTimeout(hideToast, toast.timeout)
    return () => clearTimeout(timeoutId)
  }, [hideToast, toast.timeout])

  return (
    <StyledToast ref={toastRef} $variant={toast.variant}>
      <Icon>
        <FontAwesomeIcon icon={getIcon(toast.variant)} color="white" />
      </Icon>

      <Content>
        {toast.title && <Title>{toast.title}</Title>}
        <Description>{toast.text}</Description>
      </Content>

      <CloseButton type="button" onClick={() => onClose(toast.id)}>
        <FontAwesomeIcon icon={faTimesCircle} color="white" />
      </CloseButton>
    </StyledToast>
  )
}

export default Toast
