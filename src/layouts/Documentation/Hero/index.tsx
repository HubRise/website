import * as React from "react"

import Breadcrumbs from "@components/Breadcrumbs"
import Underline from "@components/Underline"
import { DocLink } from "@utils/DocIndexer/types"

import { Container, Title } from "./Styles"

interface HeroProps {
  breadcrumbs: Array<DocLink>
  title: string
}

const Hero = ({ breadcrumbs, title }: HeroProps): JSX.Element => {
  return (
    <Container>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Underline position="center" />
      <Title>{title}</Title>
    </Container>
  )
}

export default Hero
