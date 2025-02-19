import { Container, Title, Wrapper } from "./Styles"

interface PageHeroProps {
  children?: React.ReactNode
  isTextCentered?: boolean
  title?: React.ReactNode
}

const PageHero = ({ children, isTextCentered = true, title }: PageHeroProps): JSX.Element => (
  <Container $isTextCentered={isTextCentered}>
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  </Container>
)

export default PageHero
