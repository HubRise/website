import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXRemote } from "next-mdx-remote"

import Block from "@components/Block"

import { ImageWithMargin, Text } from "../shared/Styles"

interface ApiProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
}

const Api = ({ title, descriptionMdx }: ApiProps): JSX.Element => {
  const side = (
    <ImageWithMargin>
      <Image src="/images/frontpage/api.png" alt="API" width={712} height={485} />
    </ImageWithMargin>
  )

  return (
    <Block
      backgroundColor="white"
      verticalSpacing="small"
      padding="small"
      beforeExpansion={true}
      afterExpansion={false}
      title={title}
      side={side}
      sidePosition="right"
      horizontalAlign="centerOnMobile"
      desktopVerticalAlign="center"
    >
      <Text $backgroundColor="white">
        <MDXRemote {...descriptionMdx} />
      </Text>
    </Block>
  )
}

export default Api
