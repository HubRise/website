import { BlockContentButton, BlockContentLink } from "@components/BlockContent"
import { useLayoutContext } from "@components/LayoutContext"
import { PricingYaml } from "@layouts/Pricing/types"
import { text } from "@utils/misc"

import { Action, Info, StyledInfos, Text, Title } from "./Styles"

interface InfosProps {
  infos: PricingYaml["content"]["infos"]
}

const Infos = ({ infos }: InfosProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <StyledInfos>
      {infos.map((info, idx) => (
        <Info key={idx}>
          <Title>{text(info.title)}</Title>
          <Text>{text(info.text)}</Text>
          <Action>
            {info.link && info.link.to ? (
              <BlockContentLink href={info.link.to}>{text(info.link.text)}</BlockContentLink>
            ) : (
              <BlockContentButton onClick={forms.contact.toggle}>{info.button}</BlockContentButton>
            )}
          </Action>
        </Info>
      ))}
    </StyledInfos>
  )
}

export default Infos
