import { Container, Content, MainContant, SecondaryContent } from "./Styles"
import { SidePosition } from "./types"

interface SideBlockProps {
  children: React.ReactNode
  side?: SidePosition
  secondaryContent?: React.ReactNode
  secondaryPosition?: SidePosition
  contentFirst?: boolean
}

export const SideBlock = ({
  children,
  side = "right",
  secondaryContent,
  secondaryPosition = "right",
  contentFirst = false,
}: SideBlockProps) => {
  return (
    <Container $side={side}>
      <Content $secondaryPosition={secondaryPosition} $contentFirst={contentFirst}>
        <MainContant>{children}</MainContant>
        {secondaryContent && <SecondaryContent>{secondaryContent}</SecondaryContent>}
      </Content>
    </Container>
  )
}
