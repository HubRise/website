import * as React from "react"

import { Container, Content, Title } from "./Styles"

interface HeroProps {
  title: string
}

const Hero = ({ title }: HeroProps): JSX.Element => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  )
}

export default Hero
