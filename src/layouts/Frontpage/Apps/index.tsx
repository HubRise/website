import Image from "next/image"
import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Block from "@components/Block"

import { Text } from "../shared/Styles"

import { Item, ImageOver, ImageDefault, ImageLink, List } from "./Styles"

interface AppsProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
  link_url: string
  categories: Array<string>
}

const Apps = ({ title, link_url, descriptionMdx, categories }: AppsProps): JSX.Element => {
  const side = (
    <ImageLink href={link_url}>
      <ImageDefault>
        <Image src="/images/frontpage/apps.png" alt="Apps" width={501} height={395} />
      </ImageDefault>
      <ImageOver>
        <Image src="/images/frontpage/apps-hover.png" alt="Apps" width={501} height={395} />
      </ImageOver>
    </ImageLink>
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

        <List>
          {categories.map((category, index) => (
            <Item key={index}>{category}</Item>
          ))}
        </List>
      </Text>
    </Block>
  )
}

export default Apps
