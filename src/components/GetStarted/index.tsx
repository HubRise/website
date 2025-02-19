import Button from "@components/Button"
import ScreenContainer from "@components/ScreenContainer"

import { Description } from "./Styles"
import { TGetStarted } from "./types"

interface GetStartedProps {
  getStarted: TGetStarted
}

const GetStarted = ({ getStarted }: GetStartedProps) => (
  <ScreenContainer bgColor="green" verticalPadding="big" withHeader title={getStarted.title} isTextCentered>
    <Description>{getStarted.description}</Description>
    <Button label={getStarted.button_label} link={getStarted.button_link} type="secondary" />
  </ScreenContainer>
)

export default GetStarted
