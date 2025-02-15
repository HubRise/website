import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

import Underline from "@components/Underline"

import { Container, Description, HeaderWrapper, Title } from "./Styles"
import { ScreenContainerBgColor, ScreenContainerVerticalPadding } from "./utils"

interface ScreenContainerProps {
  children: React.ReactNode
  bgColor: ScreenContainerBgColor
  verticalPadding: ScreenContainerVerticalPadding
  isTextCentered?: boolean
  withHeader?: boolean
  title?: string
  descriptionMdx?: MDXRemoteSerializeResult
}

const ScreenContainer = ({
  children,
  bgColor,
  verticalPadding,
  isTextCentered = false,
  withHeader = false,
  title = "",
  descriptionMdx,
}: ScreenContainerProps) => (
  <Container $bgColor={bgColor} $vPadding={verticalPadding} $textCentered={isTextCentered}>
    {withHeader && (
      <>
        <HeaderWrapper>
          {title && <Title>{title}</Title>}

          {descriptionMdx && (
            <Description>
              <MDXRemote {...descriptionMdx} />
            </Description>
          )}
        </HeaderWrapper>
        <Underline position="center" />
      </>
    )}
    {children}
  </Container>
)

export default ScreenContainer
