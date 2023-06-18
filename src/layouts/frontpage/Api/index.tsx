import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Content, ImageWithMargin, Text } from "../shared/Styles"

import { ImageNode } from "@utils/image"
import { markdownToHtml } from "@layouts/shared/utils/markdown"
import Block from "@layouts/shared/components/Block"

interface ApiProps {
  title: string
  description: string
  image: ImageNode
}

const Api = ({ title, description, image }: ApiProps): JSX.Element => {
  const side = (
    <ImageWithMargin>
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="API" />
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
      <Content>
        <Text $backgroundColor="white" dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />
      </Content>
    </Block>
  )
}

export default Api
