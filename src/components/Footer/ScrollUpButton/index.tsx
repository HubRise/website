import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { StyledButton } from "./Styles"

const ScrollUpButton = (): JSX.Element => (
  <StyledButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <Icon code="expand_less" size={iconSizes._32} />
  </StyledButton>
)

export default ScrollUpButton
