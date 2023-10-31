import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXRemote } from "next-mdx-remote"

import Block from "@components/Block"

import { ImageWithMargin, Text } from "../shared/Styles"

interface DocumentationProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
}

const Documentation = ({ title, descriptionMdx }: DocumentationProps): JSX.Element => {
  const side = (
    <ImageWithMargin>
      <Image src="/images/frontpage/documentation.png" alt="Documentation" width={558} height={347} />
    </ImageWithMargin>
  )

  return (
    <Block
      backgroundColor="white"
      verticalSpacing="small"
      padding="small"
      beforeExpansion={false}
      afterExpansion={true}
      title={title}
      side={side}
      sidePosition="left"
      horizontalAlign="centerOnMobile"
      desktopVerticalAlign="center"
    >
      <Text $backgroundColor="white">
        <MDXRemote {...descriptionMdx} />
      </Text>
    </Block>
  )
}

export default Documentation
