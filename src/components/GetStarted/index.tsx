import Button from "@components/Button"
import { useLayoutContext } from "@components/LayoutContext"
import ScreenContainer from "@components/ScreenContainer"

import { Description } from "./Styles"
import { TGetStarted } from "./types"

interface GetStartedProps {
  getStarted: TGetStarted
}

const GetStarted = ({ getStarted }: GetStartedProps) => {
  const { forms } = useLayoutContext()

  return (
    <ScreenContainer bgColor="green" verticalPadding="small" withHeader title={getStarted.title} isTextCentered>
      <Description>{getStarted.description}</Description>
      <Button label={getStarted.button_label} type="secondary" onClick={forms.contact.toggle} />
    </ScreenContainer>
  )
}

export default GetStarted
