import * as React from "react"

import Block from "@layouts/shared/components/Block"
import { BlockContent } from "@layouts/shared/components/BlockContent"

interface HeroProps {
  title: string
  description: string
}

const Hero = ({ title, description }: HeroProps): JSX.Element => {
  return (
    <Block backgroundColor={"green"} beforeExpansion={true} title={title}>
      <BlockContent>{description}</BlockContent>
    </Block>
  )
}

export default Hero
