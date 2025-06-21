import * as React from "react"

import Breadcrumbs from "@components/Breadcrumbs"
import { DocLink } from "@utils/DocIndexer/types"

import { Container, Content, Title } from "./Styles"

interface HeroProps {
  breadcrumbs: Array<DocLink>
  title: string
}

const Hero = ({ breadcrumbs, title }: HeroProps): JSX.Element => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </Content>
    </Container>
  )
}

export default Hero
