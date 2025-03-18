import { StyledButton } from "./Styles"
import { ButtonType } from "./utils"

interface ButtonProps {
  label: string
  link: string
  type?: ButtonType
  icon?: React.ReactNode
}

const Button = ({ label, link, type = "primary", icon }: ButtonProps) => (
  <StyledButton href={link} $type={type}>
    {label}
    {icon}
  </StyledButton>
)

export default Button
