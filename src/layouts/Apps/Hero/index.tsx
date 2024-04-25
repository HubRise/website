import Block from "@components/Block"
import { BlockContent, BlockContentButton, BlockContentLink } from "@components/BlockContent"
import { useLayoutContext } from "@components/LayoutContext"
import { AppsYaml } from "@layouts/Apps/types"
import { text } from "@utils/misc"

interface HeroProps {
  hero: AppsYaml["content"]["hero"]
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <Block backgroundColor="white" title={hero.title}>
      <BlockContent>
        <div>
          {text(hero.description.paragraph_1_text)}
          <BlockContentButton onClick={forms.contact.toggle}>
            {text(hero.description.paragraph_1_link_text)}
          </BlockContentButton>
        </div>

        <div>
          {text(hero.description.paragraph_2_text)}
          <BlockContentLink href={hero.description.paragraph_2_link_to}>
            {text(hero.description.paragraph_2_link_text)}
          </BlockContentLink>
        </div>
      </BlockContent>
    </Block>
  )
}

export default Hero
