import Button from "@components/Button"
import { useLayoutContext } from "@components/LayoutContext"
import ScreenContainer from "@components/ScreenContainer"

import { Description, Buttons } from "./Styles"

export type TActionBlock = {
  title: string
  description?: string
  buttons: Array<{
    button_label: string
    button_link?: string
  }>
}

interface ActionBlockProps {
  actionBlockData: TActionBlock
}

const ActionBlock = ({ actionBlockData }: ActionBlockProps) => {
  const { forms } = useLayoutContext()
  const { title, description, buttons } = actionBlockData

  return (
    <ScreenContainer bgColor="green" verticalPadding="small" withHeader title={title} isTextCentered>
      {description && <Description>{description}</Description>}
      <Buttons>
        {buttons.map(({ button_label, button_link }, idX) => (
          <Button
            label={button_label}
            type="secondary"
            link={button_link}
            key={idX}
            onClick={button_link === undefined ? forms.contact.toggle : undefined}
          />
        ))}
      </Buttons>
    </ScreenContainer>
  )
}

export default ActionBlock
