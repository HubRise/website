import * as React from "react"
import { graphql } from "gatsby"

import { IPricing } from "./interface"
import Plan from "./Plan"
import Infos from "./Infos"

import SEO from "@layouts/shared/components/Seo"
import Block from "@layouts/shared/components/Block"

interface PricingProps {
  data: PricingData
}

interface PricingData {
  file: {
    childYaml: {
      parsedContent: IPricing
    }
  }
}

export const graphqlQuery = graphql`
  query pricingData($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
  }
`

const Pricing = ({ data }: PricingProps): JSX.Element => {
  const { meta, content } = data.file.childYaml.parsedContent

  return (
    <>
      <SEO meta={meta} />

      <Block backgroundColor="white" title={content.hero.title}>
        <Plan plan={content.plan} />
        <Infos infos={content.infos} />
      </Block>
    </>
  )
}

export default Pricing
