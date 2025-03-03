"use client"

import GetStarted from "@components/GetStarted"
import { GetStartedYaml } from "@components/GetStarted/types"
import { ContentImageMap } from "@utils/contentImage"

import Founder from "./Founder"
import Hero from "./Hero"
import SpecialPricing from "./SpecialPricing"
import WhyChoose from "./WhyChoose"
import type { PricingYaml } from "./types"

interface PricingProps {
  yaml: PricingYaml
  getStarted: GetStartedYaml
  founderImageMap: ContentImageMap
}

const Pricing = ({ yaml, getStarted, founderImageMap }: PricingProps): JSX.Element => {
  const { content } = yaml

  return (
    <>
      <Hero hero={content.hero} />
      <Founder {...content.founder} founderImageMap={founderImageMap} />
      <WhyChoose why_choose={content.why_choose} />
      <SpecialPricing special_pricing={content.special_pricing} />
      <GetStarted getStarted={getStarted.content} />
    </>
  )
}

export default Pricing
