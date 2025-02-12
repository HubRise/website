import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

import { ContainerStyles, Description, HeaderWrapper, Title } from "./Styles"
import { ContainerBgColor, ContainerVerticalPadding } from "./utils"

interface GreyContainerProps {
  children: React.ReactNode
  bgColor: ContainerBgColor
  verticalPadding: ContainerVerticalPadding
  isTextCentered?: boolean
  withHeader?: boolean
  title?: string
  descriptionMdx?: MDXRemoteSerializeResult
}

const Container = ({
  children,
  bgColor,
  verticalPadding,
  isTextCentered = false,
  withHeader = false,
  title = "",
  descriptionMdx,
}: GreyContainerProps) => (
  <ContainerStyles $bgColor={bgColor} $vPadding={verticalPadding} $textCentered={isTextCentered}>
    {withHeader && (
      <HeaderWrapper>
        {title && <Title>{title}</Title>}

        {descriptionMdx && (
          <Description>
            <MDXRemote {...descriptionMdx} />
          </Description>
        )}
      </HeaderWrapper>
    )}
    {children}
  </ContainerStyles>
)

export default Container
