import { ButtonStyles } from "./Styles"

interface ButtonProps {
  label: string
  link: string
}

const Button = ({ label, link }: ButtonProps) => <ButtonStyles href={link}>{label}</ButtonStyles>

export default Button
