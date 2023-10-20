import { Container, Content, Side, Main } from "./Styles"
import Title from "./Title"
import { BackgroundColor, HorizontalAlign, Padding, SidePosition, VerticalAlign, VerticalSpacing } from "./utils"

interface BlockProps {
  children: React.ReactNode
  verticalSpacing?: VerticalSpacing
  padding?: Padding
  backgroundColor: BackgroundColor
  beforeExpansion?: boolean
  afterExpansion?: boolean
  horizontalAlign?: HorizontalAlign
  desktopVerticalAlign?: VerticalAlign
  title?: string
  titleAnchor?: string
  side?: React.ReactNode
  sidePosition?: SidePosition
}

const Block = ({
  children,
  verticalSpacing = "large",
  padding = "large",
  backgroundColor,
  beforeExpansion = false,
  afterExpansion = false,
  horizontalAlign = "center",
  desktopVerticalAlign = "top",
  title,
  titleAnchor,
  side,
  sidePosition = "left",
}: BlockProps): JSX.Element => {
  return (
    <Container $verticalSpacing={verticalSpacing}>
      <Content
        $padding={padding}
        $verticalPadding={backgroundColor !== "none"}
        $horizontalPadding={backgroundColor !== "none" && (!beforeExpansion || !afterExpansion)}
        $backgroundColor={backgroundColor}
        $beforeExpansion={beforeExpansion}
        $afterExpansion={afterExpansion}
        $hasSide={side !== undefined}
        $sidePosition={sidePosition}
      >
        <Main $horizontalAlign={horizontalAlign} $desktopVerticalAlign={desktopVerticalAlign}>
          {title && (
            <Title backgroundColor={backgroundColor} horizontalAlign={horizontalAlign} anchor={titleAnchor}>
              {title}
            </Title>
          )}

          {children}
        </Main>

        {side && (
          <Side $horizontalAlign={horizontalAlign} $desktopVerticalAlign={desktopVerticalAlign}>
            {side}
          </Side>
        )}
      </Content>
    </Container>
  )
}

export default Block
