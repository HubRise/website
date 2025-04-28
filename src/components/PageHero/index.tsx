import { Container, Description, Title, Wrapper } from "./Styles"

interface PageHeroProps {
  children?: React.ReactNode
  isTextCentered?: boolean
  title?: React.ReactNode
  description?: string
}

const PageHero = ({ children, isTextCentered = true, title, description }: PageHeroProps): JSX.Element => (
  <Container $isTextCentered={isTextCentered}>
    <Wrapper>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {children}
    </Wrapper>
  </Container>
)

export default PageHero
