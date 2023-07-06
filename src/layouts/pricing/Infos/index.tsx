import * as React from "react"

import { IInfo } from "../interface"

import { Text, Title, Info, StyledInfos } from "./Styles"

import { generateKey } from "@utils/misc"
import { useLayoutContext } from "@layouts/shared/components/LayoutContext"
import { BlockContentButton, BlockContentLink } from "@layouts/shared/components/BlockContent"

interface InfosProps {
  infos: Array<IInfo>
}

const Infos = ({ infos }: InfosProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <StyledInfos>
      {infos.map((special, idx) => (
        <Info key={generateKey(special.highlight, idx)}>
          <Title>{special.highlight}</Title>

          <Text>
            {special.text}

            {special.link && special.link.to ? (
              <BlockContentLink to={special.link.to} newTab={false}>
                {special.link.text}
              </BlockContentLink>
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
