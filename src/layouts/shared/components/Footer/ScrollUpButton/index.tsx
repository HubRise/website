import * as React from "react"

import { StyledButton } from "./Styles"

const ScrollUpButton: React.FC = () => (
  <StyledButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <i className="fa fa-angle-up" />
  </StyledButton>
)

export default ScrollUpButton
