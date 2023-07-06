import * as React from "react"

import { IHero } from "./interface"

import { useLayoutContext } from "@layouts/shared/components/LayoutContext"
import Block from "@layouts/shared/components/Block"
import { BlockContent, BlockContentButton } from "@layouts/shared/components/BlockContent"

const Hero = (hero: IHero): JSX.Element => {
  const { forms } = useLayoutContext()
  const { title, description } = hero

  return (
    <Block backgroundColor="white" title={title}>
      <BlockContent>
        <div>{description.paragraph_1}</div>

        {description.paragraph_2 && (
          <div>
            <BlockContentButton onClick={forms.contact.toggle}>{description.paragraph_2.button}</BlockContentButton>
            {description.paragraph_2.text}
          </div>
        )}
      </BlockContent>
    </Block>
  )
}

export default Hero

export type { IHero } from "./interface"
