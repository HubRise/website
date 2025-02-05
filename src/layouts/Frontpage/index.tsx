"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import { FrontpageYaml } from "@layouts/Frontpage/types"
import { ContentImageMap } from "@utils/contentImage"

import Apps from "./Apps"
import Hero from "./Hero"
import Integrations from "./Integrations"
import Metrics from "./Metrics"
import Partners from "./Partners"
import Pricing from "./Pricing"
import Testimonials from "./Testimonials"
import Use from "./Use"

interface FrontpageProps {
  yaml: FrontpageYaml
  heroDescriptionMdx: MDXRemoteSerializeResult
  useDescriptionMdx: MDXRemoteSerializeResult
  pricingDescriptionMdx: MDXRemoteSerializeResult
  partnersDescriptionMdx: MDXRemoteSerializeResult
  testimonialLogoMap: ContentImageMap
}

const Frontpage = ({
  yaml,
  heroDescriptionMdx,
  useDescriptionMdx,
  pricingDescriptionMdx,
  partnersDescriptionMdx,
  testimonialLogoMap,
}: FrontpageProps): JSX.Element => {
  const { hero, content } = yaml

  return (
    <>
      <Hero {...hero} descriptionMdx={heroDescriptionMdx} />
      <Metrics metrics={content.metrics} />
      <Apps />
      <Use {...content.use} descriptionMdx={useDescriptionMdx} />
      <Pricing {...content.pricing} descriptionMdx={pricingDescriptionMdx} />
      <Integrations {...content.integrations} />
      <Partners {...content.partners} descriptionMdx={partnersDescriptionMdx} />
      <Testimonials {...content.testimonials} testimonialLogoMap={testimonialLogoMap} />
    </>
  )
}

export default Frontpage
