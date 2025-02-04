import Image from "next/image"
import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import useClientRoutes from "@hooks/client/useClientRoutes"

import { TApp } from "../types"

import { Container, Title, TitleHighlight, Description, Apps, AppWrapper, AppInner, App } from "./Styles"
import { getHeroAppsImageSource } from "./utils"

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
      <Button label={button_label} link={signup} />
      <Apps>
        {apps.map(({ title, color }, index) => {
          return (
            <App $index={index} key={index}>
              <AppWrapper>
                <Image src={getHeroAppsImageSource(color)} alt="Hero Apps" fill={true} />
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
