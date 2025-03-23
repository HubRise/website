import ScreenContainer from "@components/ScreenContainer"
import { IntegrationsYaml } from "@layouts/Integrations/types"
import { text } from "@utils/misc"

import { Description } from "./Styles"

interface DevelopersProps {
  developers: IntegrationsYaml["content"]["developers"]
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description } = developers

  return (
    <ScreenContainer bgColor="green" verticalPadding="small" withHeader title={title} isTextCentered>
      <Description>
        <p>{text(description.paragraph_1)}</p>
        <p>
          {text(description.paragraph_2.chunk_1)}
          <br />
          {text(description.paragraph_2.chunk_2)}
        </p>
      </Description>
    </ScreenContainer>
  )
}

export default Developer
