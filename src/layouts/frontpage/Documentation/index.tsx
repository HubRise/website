import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Content, ImageWithMargin, Text } from "../shared/Styles"

import { ImageNode } from "@utils/image"
import { markdownToHtml } from "@layouts/shared/utils/markdown"
import Block from "@layouts/shared/components/Block"

interface DocumentationProps {
  title: string
  description: string
  image: ImageNode
}

const Documentation = ({ title, description, image }: DocumentationProps): JSX.Element => {
  const side = (
    <ImageWithMargin>
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="Documentation" />
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
      <Content>
        <Text $backgroundColor="white" dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />
      </Content>
    </Block>
  )
}

export default Documentation
