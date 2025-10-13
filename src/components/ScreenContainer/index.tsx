import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

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
  withDivider?: boolean
  anchor?: string
}

const ScreenContainer = ({
  children,
  bgColor = "backgroundLight",
  verticalPadding = "big",
  isTextCentered = false,
  withHeader = false,
  title = "",
  descriptionMdx,
  withDivider = true,
  anchor = "",
}: ScreenContainerProps) => (
  <Container $bgColor={bgColor} $vPadding={verticalPadding} $textCentered={isTextCentered}>
    {withHeader && (
      <>
        <HeaderWrapper>
          {title && (
            <Title $bgColor={bgColor} id={anchor}>
              {title}
            </Title>
          )}

          {descriptionMdx && (
            <Description>
              <MDXRemote {...descriptionMdx} />
            </Description>
          )}
        </HeaderWrapper>

        {withDivider && bgColor !== "green" && <Underline position="center" />}
      </>
    )}
    {children}
  </Container>
)

export default ScreenContainer
