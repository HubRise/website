import * as React from "react"
import { graphql } from "gatsby"

import Api from "./Api"
import Apps from "./Apps"
import Developers, { TeamImageNode } from "./Developers"
import Documentation from "./Documentation"
import Hero from "./Hero"
import Join from "./Join"
import MissionAndScalability from "./MissionAndScalability"
import Pricing from "./Pricing"

import { ImageNode } from "@utils/image"
import SEO from "@layouts/shared/components/Seo"

interface FrontpageProps {
  data: FrontpageData
}

interface FrontpageData {
  file: {
    childYaml: {
      parsedContent: any // #TODO
    }
  }
  apps: ImageNode
  appsHover: ImageNode
  apiImage: ImageNode
  documentationImage: ImageNode
  teamImages: Array<TeamImageNode>
}

export const graphqlQuery = graphql`
  query frontpageData($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
    apps: file(absolutePath: { glob: "**/content/images/frontpage/apps.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    appsHover: file(absolutePath: { glob: "**/content/images/frontpage/apps-hover.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    apiImage: file(absolutePath: { glob: "**/content/images/frontpage/api.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    documentationImage: file(absolutePath: { glob: "**/content/images/frontpage/documentation.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    teamImages: allFile(
      filter: {
        absolutePath: { glob: "**/content/images/frontpage/team/*" }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        base
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

const Frontpage = ({ data }: FrontpageProps): JSX.Element => {
  const { file, apps, appsHover, apiImage, documentationImage, teamImages } = data
  const { meta, hero, content } = file.childYaml.parsedContent

  return (
    <div className="frontpage">
      <SEO meta={meta} />

      <Hero {...hero} />

      <Apps {...content.apps} apps={apps} appsHover={appsHover} />

      <Api {...content.api} image={apiImage} />

      <Documentation {...content.documentation} image={documentationImage} />

      <Pricing {...content.pricing} />

      <Developers {...content.developers} teamImages={teamImages} />

      {/*<MissionAndScalability {...content.mission_and_scalability} />*/}

      <Join {...content.join} />
    </div>
  )
}

export default Frontpage
