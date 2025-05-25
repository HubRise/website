import Button from "@components/Button"
import { useLayoutContext } from "@components/LayoutContext"
import ScreenContainer from "@components/ScreenContainer"

import { StyledActionBlock, Description, Buttons } from "./Styles"

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
    <StyledActionBlock>
      <ScreenContainer bgColor="green" verticalPadding="small" withHeader title={title} isTextCentered>
        {description && <Description>{description}</Description>}
        {buttons.length > 1 ? (
          <Buttons>
            {buttons.map(({ button_label, button_link }, idX) => {
              return button_link === undefined ? (
                <Button
                  label={button_label}
                  type="secondary"
                  link={button_link}
                  onClick={forms.contact.toggle}
                  key={idX}
                />
              ) : (
                <Button label={button_label} type="secondary" link={button_link} key={idX} />
              )
            })}
          </Buttons>
        ) : (
          <>
            {buttons[0].button_link === undefined ? (
              <Button
                label={buttons[0].button_label}
                type="secondary"
                link={buttons[0].button_link}
                onClick={forms.contact.toggle}
              />
            ) : (
              <Button label={buttons[0].button_label} type="secondary" link={buttons[0].button_link} />
            )}
          </>
        )}
      </ScreenContainer>
    </StyledActionBlock>
  )
}

export default ActionBlock
