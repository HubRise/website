import Block from "@components/Block"
import { IntegrationsYaml } from "@layouts/Integrations/types"
import { text } from "@utils/misc"

import { Description } from "./Styles"

interface DevelopersProps {
  developers: IntegrationsYaml["content"]["developers"]
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description } = developers

  return (
    <Block backgroundColor="green" beforeExpansion={true} afterExpansion={true} title={title}>
      <Description>
        <p>{text(description.paragraph_1)}</p>
        <p>
          {text(description.paragraph_2.chunk_1)}
          <br />
          {text(description.paragraph_2.chunk_2)}
        </p>
      </Description>
    </Block>
  )
}

export default Developer
