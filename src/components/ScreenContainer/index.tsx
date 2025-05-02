import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import Underline from "@components/Underline"

import { Container, Description, HeaderWrapper, Title } from "./Styles"
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
}: ScreenContainerProps) => (
  <Container $bgColor={bgColor} $vPadding={verticalPadding} $textCentered={isTextCentered}>
    {withHeader && (
      <>
        <HeaderWrapper>
          {title && <Title $bgColor={bgColor}>{title}</Title>}

          {descriptionMdx && (
            <Description>
              <MDXRemote {...descriptionMdx} />
            </Description>
          )}
          {headerButtonLabel && <Button label={headerButtonLabel} link={headerButtonLink} />}
        </HeaderWrapper>
        {withDivider && <Underline position="center" />}
      </>
    )}
    {children}
  </Container>
)

export default ScreenContainer
