import { useLayoutContext } from "@components/LayoutContext"
import PageHero from "@components/PageHero"
import { IntegrationsYaml } from "@layouts/Integrations/types"
import { text } from "@utils/misc"

import { Content, ContentButton, ContentLink } from "./Styles"

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
          <ContentButton onClick={forms.contact.toggle}>{text(hero.description.paragraph_1_link_text)}</ContentButton>
        </p>

        <p>
          {text(hero.description.paragraph_2_text)}
          <ContentLink href={hero.description.paragraph_2_link_to}>
            {text(hero.description.paragraph_2_link_text)}
          </ContentLink>
        </p>
      </Content>
    </PageHero>
  )
}

export default Hero
