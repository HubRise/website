import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import useClientRoutes from "@hooks/client/useClientRoutes"

import {
  Container,
  Title,
  TitleHighlight,
  Description,
  Button,
  Apps,
  App,
  AppWrapperTop,
  AppInnerTop,
  AppWrapperBottom,
  AppInnerBottom,
} from "./Styles"
import { HeroAppColor } from "./utils"

type App = {
  title: string
  type: string
  color: HeroAppColor
}

interface HeroProps {
  title: {
    start: string
    highlight1: string
    highlight2: string
    and: string
  }
  button_label: string
  apps: Array<App>
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
        {apps.map(({ title, type, color }, index) => {
          if (type === "top") {
            return (
              <App $type="top" $index={index} $appsAmmount={apps.length} key={index}>
                <AppWrapperTop $color={color}>
                  <AppInnerTop $color={color}>
                    <span>{title}</span>
                  </AppInnerTop>
                </AppWrapperTop>
              </App>
            )
          } else {
            return (
              <App $type="bottom" $index={index} $appsAmmount={apps.length} key={index}>
                <AppWrapperBottom $color={color}>
                  <AppInnerBottom $color={color}>
                    <span>{title}</span>
                  </AppInnerBottom>
                </AppWrapperBottom>
              </App>
            )
          }
        })}
      </Apps>
    </Container>
  )
}

export default Hero
