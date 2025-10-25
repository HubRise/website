"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import ActionBlock from "@components/ActionBlock"
import Metrics from "@components/Metrics"
import TestimonialsBlock from "@components/TestimonialsBlock"
import { TestimonialsYaml } from "@layouts/Testimonials/types"
import { ContentImageMap } from "@utils/contentImage"

import Apps from "./Apps"
import Benefits from "./Benefits"
import Features from "./Features"
import Hero from "./Hero"
import Middleware from "./Middleware"
import { BecomePartnerYaml } from "./types"

interface BecomePartnerProps {
  yaml: BecomePartnerYaml
  testimonials: TestimonialsYaml
  middlewareDescriptionMdx: MDXRemoteSerializeResult
  appsDescriptionMdx: MDXRemoteSerializeResult
  testimonialDescriptionMdx: MDXRemoteSerializeResult
  testimonialLogoMap: ContentImageMap
}

const BecomePartner = ({
  yaml,
  testimonials,
  middlewareDescriptionMdx,
  appsDescriptionMdx,
  testimonialDescriptionMdx,
  testimonialLogoMap,
}: BecomePartnerProps): JSX.Element => {
  const content = yaml.content

  return (
    <>
      <Hero hero={content.hero} />
      <Features features={content.features} />
      <Benefits {...content.benefits} />
      <Middleware middleware={content.middleware} descriptionMdx={middlewareDescriptionMdx} />
      <Apps apps={content.apps} descriptionMdx={appsDescriptionMdx} />
      <Metrics metrics={content.metrics} />
      <TestimonialsBlock
        title={yaml.content.testimonials.title}
        descriptionMdx={testimonialDescriptionMdx}
        testimonials={testimonials.content.testimonials}
        idXToDisplay={content.testimonials.list}
        testimonialLogoMap={testimonialLogoMap}
      />
      <ActionBlock actionBlockData={content.action_block} />
    </>
  )
}

export default BecomePartner
