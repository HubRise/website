import { BlockContentButton, BlockContentLink } from "@components/BlockContent"
import { useLayoutContext } from "@components/LayoutContext"
import { PricingYaml } from "@layouts/Pricing/types"

import { Text, Title, Info, StyledInfos } from "./Styles"

interface InfosProps {
  infos: PricingYaml["content"]["infos"]
}

const Infos = ({ infos }: InfosProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <StyledInfos>
      {infos.map((special, idx) => (
        <Info key={idx}>
          <Title>{special.highlight}</Title>

          <Text>
            {special.text}

            {special.link && special.link.to ? (
              <BlockContentLink href={special.link.to}>{special.link.text}</BlockContentLink>
            ) : (
              <BlockContentButton onClick={forms.contact.toggle}>{special.button}</BlockContentButton>
            )}
          </Text>
        </Info>
      ))}
    </StyledInfos>
  )
}

export default Infos
