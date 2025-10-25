import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import SerializedMdxContent from "@components/SerializedMdxContent"
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
  overflowVisible?: boolean
}

const ScreenContainer = ({
  children,
  bgColor = "backgroundLight",
  verticalPadding = "big",
  isTextCentered = false,
  withHeader = false,
  title,
  descriptionMdx,
  withDivider = true,
  anchor,
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
            <Title $bgColor={bgColor} id={anchor}>
              {title}
            </Title>
          )}

          {descriptionMdx && (
            <Description>
              <SerializedMdxContent content={descriptionMdx} />
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
