"use client"

import { StyledLabel } from "./Styles"

interface LabelProps {
  type: "optional" | "deprecated"
}

const Label = ({ type }: LabelProps): JSX.Element => <StyledLabel>{type}</StyledLabel>

export default Label
