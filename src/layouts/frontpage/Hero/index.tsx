import * as React from "react"

import { Container, Description, Image, Title, Text, TextContainer, TextWrapper, Button } from "./Styles"

import { markdownToHtml } from "@utils/misc"

interface HeroProps {
  title: string
  description: string
  button_label: string
  button_url: string
}

const Hero = ({ title, description, button_label, button_url }: HeroProps): JSX.Element => (
  <Container>
    <Image />

    <TextContainer>
      <TextWrapper>
        <Text>
          <Title>{title}</Title>
          <Description
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(description),
            }}
          />
          <Button to={button_url}>{button_label}</Button>
        </Text>
      </TextWrapper>
    </TextContainer>
  </Container>
)

export default Hero
