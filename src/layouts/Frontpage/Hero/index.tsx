import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import useClientRoutes from "@hooks/client/useClientRoutes"

import { TApp } from "../types"

import { Container, Title, TitleHighlight, Description, Button, Apps, App, AppWrapper, AppInner } from "./Styles"

interface HeroProps {
  title: {
    start: string
    highlight1: string
    and: string
    highlight2: string
  }
  button_label: string
  apps: Array<TApp>
  descriptionMdx: MDXRemoteSerializeResult
}

const Hero = ({ title, button_label, apps, descriptionMdx }: HeroProps): JSX.Element => {
  const { signup } = useClientRoutes()

  return (
    <Container>
      <Title>
        {title.start}
        <TitleHighlight> {title.highlight1} </TitleHighlight>
        {title.and}
        <TitleHighlight> {title.highlight2}</TitleHighlight>
      </Title>
      <Description>
        <MDXRemote {...descriptionMdx} />
      </Description>
      <Button href={signup}>{button_label}</Button>
      <Apps>
        {apps.map(({ title, color }, index) => {
          return (
            <App $index={index} $nbApps={apps.length} $color={color} key={index}>
              <AppWrapper $color={color}>
                <AppInner $color={color}>
                  <span>{title}</span>
                </AppInner>
              </AppWrapper>
            </App>
          )
        })}
      </Apps>
    </Container>
  )
}

export default Hero
