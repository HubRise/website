import { ButtonStyles } from "./Styles"
import { ButtonType } from "./utils"

interface ButtonProps {
  label: string
  link: string
  type?: ButtonType
  icon?: React.ReactNode
}

const Button = ({ label, link, type = "primary", icon }: ButtonProps) => (
  <ButtonStyles href={link} $type={type}>
    {label}
    {icon && icon}
  </ButtonStyles>
)

export default Button
