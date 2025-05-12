import Button from "@components/Button"
import { useLayoutContext } from "@components/LayoutContext"
import ScreenContainer from "@components/ScreenContainer"

import { StyledActionBlock, Description } from "./Styles"

export type TActionBlock = {
  title: string
  description?: string
  button_label: string
  button_link?: string
}

interface ActionBlockProps {
  actionBlockData: TActionBlock
}

const ActionBlock = ({ actionBlockData }: ActionBlockProps) => {
  const { forms } = useLayoutContext()
  const { title, description, button_label, button_link } = actionBlockData

  return (
    <StyledActionBlock>
      <ScreenContainer bgColor="green" verticalPadding="small" withHeader title={title} isTextCentered>
        {description && <Description>{description}</Description>}
        {button_link === undefined ? (
          <Button label={button_label} type="secondary" link={button_link} onClick={forms.contact.toggle} />
        ) : (
          <Button label={button_label} type="secondary" link={button_link} />
        )}
      </ScreenContainer>
    </StyledActionBlock>
  )
}

export default ActionBlock
