import { BlockContentButton, BlockContentLink } from "@components/BlockContent"
import { useLayoutContext } from "@components/LayoutContext"
import PageHero from "@components/PageHero"
import Underline from "@components/Underline"
import { IntegrationsYaml } from "@layouts/Integrations/types"
import { text } from "@utils/misc"

import { Content } from "./Styles"

interface HeroProps {
  hero: IntegrationsYaml["content"]["hero"]
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <PageHero title={hero.title}>
      <Content>
        <p>
          {text(hero.description.paragraph_1_text)}
          <BlockContentButton onClick={forms.contact.toggle}>
            {text(hero.description.paragraph_1_link_text)}
          </BlockContentButton>
        </p>

        <p>
          {text(hero.description.paragraph_2_text)}
          <BlockContentLink href={hero.description.paragraph_2_link_to}>
            {text(hero.description.paragraph_2_link_text)}
          </BlockContentLink>
        </p>
        <Underline position="center" />
      </Content>
    </PageHero>
  )
}

export default Hero
