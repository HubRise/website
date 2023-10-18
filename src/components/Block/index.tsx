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
  slug?: string
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
  slug,
  side,
  sidePosition = "left",
}: BlockProps): JSX.Element => {
  return (
    <Container $verticalSpacing={verticalSpacing} id={slug}>
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
            <Title backgroundColor={backgroundColor} horizontalAlign={horizontalAlign}>
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
