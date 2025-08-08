"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Metrics from "@components/Metrics"
import TestimonialsBlock from "@components/TestimonialsBlock"
import { FrontpageYaml } from "@layouts/Frontpage/types"
import { TestimonialsYaml } from "@layouts/Testimonials/types"
import { ContentImageMap } from "@utils/contentImage"

import AppCarousel from "./AppCarousel"
import Features from "./Features"
import Hero from "./Hero"
import IncludedApps from "./IncludedApps"
import Partners from "./Partners"
import Pricing from "./Pricing"

interface FrontpageProps {
  yaml: FrontpageYaml
  heroDescriptionMdx: MDXRemoteSerializeResult
  appLogosMap: ContentImageMap
  featuresDescriptionMdx: MDXRemoteSerializeResult
  featuresImagesMap: ContentImageMap
  pricingDescriptionMdx: MDXRemoteSerializeResult
  partnersDescriptionMdx: MDXRemoteSerializeResult
  testimonials: TestimonialsYaml
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
  testimonials,
  testimonialLogoMap,
}: FrontpageProps): JSX.Element => {
  const { hero, content } = yaml

  return (
    <>
      <Hero {...hero} descriptionMdx={heroDescriptionMdx} />
      <Metrics metrics={content.metrics} />
      <AppCarousel appLogosMap={appLogosMap} />
      <Features {...content.features} descriptionMdx={featuresDescriptionMdx} featuresImagesMap={featuresImagesMap} />
      <Pricing {...content.pricing} descriptionMdx={pricingDescriptionMdx} />
      <IncludedApps {...content.included_apps} />
      <Partners {...content.partners} descriptionMdx={partnersDescriptionMdx} />
      <TestimonialsBlock
        title={testimonials.content.block_title}
        testimonials={testimonials.content.testimonials}
        idXToDisplay={content.testimonials.list}
        link={content.testimonials.link}
        nbToDisplayOnMobile={2}
        testimonialLogoMap={testimonialLogoMap}
      />
    </>
  )
}

export default Frontpage
