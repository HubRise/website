import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Container, Title, Description, Item, List, ImageOver, ImageDefault, ImageLink, Text } from "./Styles"

import { ImageNode } from "@utils/image"
import { markdownToHtml } from "@utils/misc"

interface AppsProps {
  title: string
  description: string
  categories: Array<string>
  apps: ImageNode
  appsHover: ImageNode
}

const Apps = ({ title, description, categories, apps, appsHover }: AppsProps): JSX.Element => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_right">
        <Container>
          <Text>
            <Title>{title}</Title>
            <Description dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />
            <List>
              {categories.map((category, index) => (
                <Item key={index}>{category}</Item>
              ))}
            </List>
          </Text>

          <ImageLink to="/apps">
            <ImageDefault>
              <GatsbyImage image={apps.childImageSharp.gatsbyImageData} alt="Apps" />
            </ImageDefault>
            <ImageOver>
              <GatsbyImage image={appsHover.childImageSharp.gatsbyImageData} alt="Apps" />
            </ImageOver>
          </ImageLink>
        </Container>
      </div>
    </section>
  )
}

export default Apps
