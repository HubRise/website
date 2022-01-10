import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Container, Text, Title, Description, Image } from "./Styles"

import { ImageNode } from "@utils/image"
import { markdownToHtml } from "@utils/misc"

interface DocumentationProps {
  title: string
  description: string
  image: ImageNode
}

const Documentation = ({ title, description, image }: DocumentationProps): JSX.Element => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_right">
        <Container>
          <Text>
            <Title>{title}</Title>
            <Description dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />
          </Text>

          <Image>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="Documentation" />
          </Image>
        </Container>
      </div>
    </section>
  )
}

export default Documentation
