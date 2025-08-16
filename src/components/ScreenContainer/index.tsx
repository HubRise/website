import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import Underline from "@components/Underline"

import { Anchor, Container, Description, HeaderWrapper, Title } from "./Styles"
import { ScreenContainerBgColor, ScreenContainerVerticalPadding } from "./utils"

interface ScreenContainerProps {
  children: React.ReactNode
  bgColor?: ScreenContainerBgColor
  verticalPadding?: ScreenContainerVerticalPadding
  isTextCentered?: boolean
  withHeader?: boolean
  title?: string
  descriptionMdx?: MDXRemoteSerializeResult
  headerButtonLabel?: string
  headerButtonLink?: string
  withDivider?: boolean
  anchor?: string
  overflowVisible?: boolean
}

const ScreenContainer = ({
  children,
  bgColor = "backgroundLight",
  verticalPadding = "big",
  isTextCentered = false,
  withHeader = false,
  title = "",
  descriptionMdx,
  headerButtonLabel = "",
  headerButtonLink = "",
  withDivider = true,
  anchor = "",
  overflowVisible = false,
}: ScreenContainerProps) => (
  <Container
    $bgColor={bgColor}
    $verticalPadding={verticalPadding}
    $textCentered={isTextCentered}
    $overflowVisible={overflowVisible}
  >
    {withHeader && (
      <>
        <HeaderWrapper>
          {title && (
            <Title $bgColor={bgColor} id={anchor ? anchor : ""}>
              {anchor ? <Anchor href={`#${anchor}`}>{title}</Anchor> : title}
            </Title>
          )}

          {descriptionMdx && (
            <Description>
              <MDXRemote {...descriptionMdx} />
            </Description>
          )}
          {headerButtonLabel && <Button label={headerButtonLabel} link={headerButtonLink} />}
        </HeaderWrapper>

        {withDivider && bgColor !== "green" && <Underline position="center" />}
      </>
    )}
    {children}
  </Container>
)

export default ScreenContainer
