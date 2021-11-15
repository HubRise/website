import * as React from "react"

import { StyledLabel } from "./Styles"

interface LabelProps {
  type: "optional"
}

const Label = ({ type }: LabelProps): JSX.Element => <StyledLabel>{type}</StyledLabel>

export default Label
