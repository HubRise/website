import * as React from 'react'
import { graphql } from 'gatsby'

import { ImageNode } from '@utils/image'
import {
  Hero,
  Apps,
  Api,
  Documentation,
  Pricing,
  Developers,
  Join
} from './components'
import SEO from '@components/Seo'
import { YamlContext } from '@utils/context'
import { TeamImageNode } from './components/Developers'

interface FrontpageProps {
  data: FrontpageData
  pageContext: YamlContext
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
    appsHover: file(
      absolutePath: { glob: "**/content/images/frontpage/apps-hover.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    apiImage: file(
      absolutePath: { glob: "**/content/images/frontpage/api.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    documentationImage: file(
      absolutePath: { glob: "**/content/images/frontpage/documentation.png" }
    ) {
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

const Frontpage = ({ data, pageContext }: FrontpageProps): JSX.Element => {
  const {
    file,
    apps,
    appsHover,
    apiImage,
    documentationImage,
    teamImages
  } = data
  const { meta, hero, content } = file.childYaml.parsedContent

  return (
    <div className="frontpage">
      <SEO localeCode={pageContext.localeCode} meta={meta} />

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
