"use client"

import ActionBlock from "@components/ActionBlock"
import { ContentImage } from "@utils/contentImage"

import Founder from "./Founder"
import Hero from "./Hero"
import SpecialPricing from "./SpecialPricing"
import WhyChoose from "./WhyChoose"
import type { PricingYaml } from "./types"

interface PricingProps {
  yaml: PricingYaml
  founderImage: ContentImage
}

const Pricing = ({ yaml, founderImage }: PricingProps): JSX.Element => {
  const { content } = yaml

  return (
    <>
      <Hero hero={content.hero} />
      <Founder {...content.founder} founderImage={founderImage} />
      <WhyChoose why_choose={content.why_choose} />
      <SpecialPricing special_pricing={content.special_pricing} />
      <ActionBlock actionBlockData={content.action_block} />
    </>
  )
}

export default Pricing
