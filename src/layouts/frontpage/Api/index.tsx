import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Container, Description, Title, Image } from "./Styles"

import { ImageNode } from "@utils/image"
import { markdownToHtml } from "@utils/misc"

interface ApiProps {
  title: string
  description: string
  image: ImageNode
}

const Api = ({ title, description, image }: ApiProps): JSX.Element => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_left">
        <Container>
          <div>
            <Title>{title}</Title>
            <Description dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />
          </div>

          <Image>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="API" />
          </Image>
        </Container>
      </div>
    </section>
  )
}

export default Api
