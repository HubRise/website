import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Content, Text } from "../shared/Styles"

import { Item, ImageOver, ImageDefault, ImageLink, List } from "./Styles"

import { ImageNode } from "@utils/image"
import { markdownToHtml } from "@layouts/shared/utils/markdown"
import Block from "@layouts/shared/components/Block"

interface AppsProps {
  title: string
  description: string
  categories: Array<string>
  apps: ImageNode
  appsHover: ImageNode
}

const Apps = ({ title, description, categories, apps, appsHover }: AppsProps): JSX.Element => {
  const side = (
    <ImageLink to="/apps">
      <ImageDefault>
        <GatsbyImage image={apps.childImageSharp.gatsbyImageData} alt="Apps" />
      </ImageDefault>
      <ImageOver>
        <GatsbyImage image={appsHover.childImageSharp.gatsbyImageData} alt="Apps" />
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
      <Content>
        <Text $backgroundColor="white" dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />
        <List>
          {categories.map((category, index) => (
            <Item key={index}>{category}</Item>
          ))}
        </List>
      </Content>
    </Block>
  )
}

export default Apps
