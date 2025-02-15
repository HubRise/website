import { Container, Wrapper } from "./Styles"

interface PageHeroProps {
  children: React.ReactNode
  isTextCentered?: boolean
}

const PageHero = ({ children, isTextCentered = true }: PageHeroProps): JSX.Element => (
  <Container $isTextCentered={isTextCentered}>
    <Wrapper>{children}</Wrapper>
  </Container>
)

export default PageHero
