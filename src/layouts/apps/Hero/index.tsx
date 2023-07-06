import * as React from "react"

import { IHero } from "../interface"

import Block from "@layouts/shared/components/Block"
import { BlockContent, BlockContentButton, BlockContentLink } from "@layouts/shared/components/BlockContent"
import { useLayoutContext } from "@layouts/shared/components/LayoutContext"

interface HeroProps {
  hero: IHero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <Block backgroundColor="white" title={hero.title}>
      <BlockContent>
        <div>
          {hero.description.paragraph_1_text}
          <BlockContentButton onClick={forms.contact.toggle}>
            {hero.description.paragraph_1_link_text}
          </BlockContentButton>
        </div>

        <div>
          {hero.description.paragraph_2_text}
          <BlockContentLink to={hero.description.paragraph_2_link_to}>
            {hero.description.paragraph_2_link_text}
          </BlockContentLink>
        </div>
      </BlockContent>
    </Block>
  )
}

export default Hero
