"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Metrics from "@components/Metrics"
import { FrontpageYaml } from "@layouts/Frontpage/types"
import { ContentImageMap } from "@utils/contentImage"

import Apps from "./Apps"
import Features from "./Features"
import Hero from "./Hero"
import Integrations from "./Integrations"
import Partners from "./Partners"
import Pricing from "./Pricing"
import Testimonials from "./Testimonials"

interface FrontpageProps {
  yaml: FrontpageYaml
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
      <Testimonials {...content.testimonials} testimonialLogoMap={testimonialLogoMap} />
    </>
  )
}

export default Frontpage
