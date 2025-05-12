"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Metrics from "@components/Metrics"
import TestimonialsBlock from "@components/TestimonialsBlock"
import { FrontpageYaml } from "@layouts/Frontpage/types"
import { TestimonialsYaml } from "@layouts/Testimonials/types"
import { ContentImageMap } from "@utils/contentImage"

import Apps from "./Apps"
import Features from "./Features"
import Hero from "./Hero"
import Integrations from "./Integrations"
import Partners from "./Partners"
import Pricing from "./Pricing"

interface FrontpageProps {
  yaml: FrontpageYaml
  testimonials: TestimonialsYaml
  heroDescriptionMdx: MDXRemoteSerializeResult
  appLogosMap: ContentImageMap
  featuresDescriptionMdx: MDXRemoteSerializeResult
  featuresImagesMap: ContentImageMap
  pricingDescriptionMdx: MDXRemoteSerializeResult
  partnersDescriptionMdx: MDXRemoteSerializeResult
  testimonialLogoMap: ContentImageMap
}

const Frontpage = ({
  yaml,
  testimonials,
  heroDescriptionMdx,
  appLogosMap,
  featuresDescriptionMdx,
  featuresImagesMap,
  pricingDescriptionMdx,
  partnersDescriptionMdx,
  testimonialLogoMap,
}: FrontpageProps): JSX.Element => {
  const { hero, content } = yaml

  return (
    <>
      <Hero {...hero} descriptionMdx={heroDescriptionMdx} />
      <Metrics metrics={content.metrics} />
      <Apps apps={content.apps} appLogosMap={appLogosMap} />
      <Features {...content.features} descriptionMdx={featuresDescriptionMdx} featuresImagesMap={featuresImagesMap} />
      <Pricing {...content.pricing} descriptionMdx={pricingDescriptionMdx} />
      <Integrations {...content.integrations} />
      <Partners {...content.partners} descriptionMdx={partnersDescriptionMdx} />
      <TestimonialsBlock
        title={testimonials.content.block_title}
        testimonials={testimonials.content.testimonials}
        idXToDisplay={content.testimonials}
        nbToDisplayOnMobile={2}
        testimonialLogoMap={testimonialLogoMap}
      />
    </>
  )
}

export default Frontpage
