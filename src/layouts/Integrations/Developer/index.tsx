import Button from "@components/Button"
import ScreenContainer from "@components/ScreenContainer"
import { IntegrationsYaml } from "@layouts/Integrations/types"
import { text } from "@utils/misc"

import { Description } from "./Styles"

interface DevelopersProps {
  developers: IntegrationsYaml["content"]["developers"]
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description, button_label, button_link } = developers

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
      <Button label={button_label} type="secondary" link={button_link} />
    </ScreenContainer>
  )
}

export default Developer
