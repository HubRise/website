import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

import { Description, Title, Wrapper } from "./Styles"

interface ContainerHeaderProps {
  title: string
  descriptionMdx?: MDXRemoteSerializeResult
}

const ContainerHeader = ({ title, descriptionMdx }: ContainerHeaderProps) => (
  <Wrapper>
    <Title>{title}</Title>

    {descriptionMdx && (
      <Description>
        <MDXRemote {...descriptionMdx} />
      </Description>
    )}
  </Wrapper>
)

export default ContainerHeader
