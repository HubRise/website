import { StyledCard } from "./Styles"

export type CardPadding = "small" | "big"

interface CardProps {
  padding?: CardPadding
  children: React.ReactNode
}

const Card = ({ children, padding = "small" }: CardProps) => <StyledCard $padding={padding}>{children}</StyledCard>

export default Card
