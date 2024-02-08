import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import { Banner, Container, Description, Title, Text, TextContainer, TextWrapper, Button } from "./Styles"

interface HeroProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
  button_label: string
  button_url: string
}

const Hero = ({ title, descriptionMdx, button_label, button_url }: HeroProps): JSX.Element => (
  <Container>
    <Banner />

    <TextContainer>
      <TextWrapper>
        <Text>
          <Title>{title}</Title>
          <Description>
            <MDXRemote {...descriptionMdx} />
          </Description>
          <Button href={button_url}>{button_label}</Button>
        </Text>
      </TextWrapper>
    </TextContainer>
  </Container>
)

export default Hero
