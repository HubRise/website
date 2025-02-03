import { Container } from "./Styles"

interface GreyContainerProps {
  children: React.ReactNode
}

const GreyContainer = ({ children }: GreyContainerProps) => <Container>{children}</Container>

export default GreyContainer
