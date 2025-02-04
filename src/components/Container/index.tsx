import { ContainerStyles } from "./Styles"
import { ContainerBgColor, ContainerVerticalPadding } from "./utils"

interface GreyContainerProps {
  children: React.ReactNode
  bgColor: ContainerBgColor
  verticalPadding: ContainerVerticalPadding
  isTextCentered?: boolean
}

const Container = ({ children, bgColor, verticalPadding, isTextCentered = false }: GreyContainerProps) => (
  <ContainerStyles $bgColor={bgColor} $vPadding={verticalPadding} $textCentered={isTextCentered}>
    {children}
  </ContainerStyles>
)

export default Container
