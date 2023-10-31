import Block from "@components/Block"
import { AppsYaml } from "@layouts/Apps/types"

import { Description } from "./Styles"

interface DevelopersProps {
  developers: AppsYaml["content"]["developers"]
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description } = developers

  return (
    <Block backgroundColor="green" beforeExpansion={true} afterExpansion={true} title={title}>
      <Description>
        <p>{description.paragraph_1}</p>
        <p>
          {description.paragraph_2.chunk_1}
          <br />
          {description.paragraph_2.chunk_2}
        </p>
      </Description>
    </Block>
  )
}

export default Developer
