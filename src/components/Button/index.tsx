import { StyledButton } from "./Styles"
import { ButtonType } from "./utils"

interface ButtonProps {
  label: string
  link?: string
  type?: ButtonType
  icon?: React.ReactNode
  onClick?: () => void
}

const Button = ({ label, link = "#", type = "primary", icon, onClick }: ButtonProps) => (
  <StyledButton
    href={link}
    $type={type}
    onClick={(e) => {
      if (onClick !== undefined) {
        e.preventDefault()
        onClick !== undefined && onClick()
      }
    }}
  >
    {label}
    {icon}
  </StyledButton>
)

export default Button
