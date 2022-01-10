import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

export interface ImageNode {
  childImageSharp: ImageSharp
}

export interface ImageSharp {
  gatsbyImageData: IGatsbyImageData
}
