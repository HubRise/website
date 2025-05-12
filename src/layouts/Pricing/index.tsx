"use client"

import ActionBlock from "@components/ActionBlock"
import { ContentImageMap } from "@utils/contentImage"

import Founder from "./Founder"
import Hero from "./Hero"
import SpecialPricing from "./SpecialPricing"
import WhyChoose from "./WhyChoose"
import type { PricingYaml } from "./types"

interface PricingProps {
  yaml: PricingYaml
  founderImageMap: ContentImageMap
}

const Pricing = ({ yaml, founderImageMap }: PricingProps): JSX.Element => {
  const { content } = yaml

  return (
    <>
      <Hero hero={content.hero} />
      <Founder {...content.founder} founderImageMap={founderImageMap} />
      <WhyChoose why_choose={content.why_choose} />
      <SpecialPricing special_pricing={content.special_pricing} />
      <ActionBlock actionBlockData={content.action_block} />
    </>
  )
}

export default Pricing
