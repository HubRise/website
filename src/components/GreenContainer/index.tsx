import { Container } from "./Styles"

interface GreenContainerProps {
  children: React.ReactNode
}

const GreenContainer = ({ children }: GreenContainerProps) => <Container>{children}</Container>

export default GreenContainer
