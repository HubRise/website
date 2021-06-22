import * as React from 'react'
import { graphql } from 'gatsby'

import { IPricing } from './interface'
import Offer from './components/Offer'
import Specials from './components/Specials'
import SEO from '@components/Seo'
import { YamlContext } from '@utils/context'

interface PricingProps {
  data: PricingData
  pageContext: YamlContext
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

const Pricing = ({ data, pageContext }: PricingProps): JSX.Element => {
  const { meta, content } = data.file.childYaml.parsedContent

  return (
    <>
      <SEO localeCode={pageContext.localeCode} meta={meta} />

      <section className="section section_white pricing">
        <div className="section__in section__in_padding">
          <h3 className="section__title">{content.hero.title}</h3>
          <Offer offer={content.offer} />
          <Specials specials={content.specials} />
        </div>
      </section>
    </>
  )
}

export default Pricing
