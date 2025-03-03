import { StyledUnderline } from "./Styles"

export type UnderlinePosition = "left" | "center"

interface UnderlineProps {
  position?: UnderlinePosition
}

const Underline = ({ position = "left" }: UnderlineProps) => <StyledUnderline $position={position} />

export default Underline
