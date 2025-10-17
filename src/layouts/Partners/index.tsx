"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import PageHero from "@components/PageHero"
import ScreenContainer from "@components/ScreenContainer"
import { ContentImageMap } from "@utils/contentImage"

import Partner from "./Partner"
import { PartnerCards } from "./Styles"
import type { PartnersYaml } from "./types"

interface PartnersProps {
  yaml: PartnersYaml
  imageMap: ContentImageMap
  descriptionMdxMap: Record<string, MDXRemoteSerializeResult>
}

const Partners = ({ yaml, imageMap, descriptionMdxMap }: PartnersProps) => {
  const { content } = yaml

  return (
    <>
      <PageHero title={content.title} description={content.description} />

      <ScreenContainer>
        <PartnerCards>
          {content.partners.map((partner, index) => (
            <Partner
              key={index}
              partner={partner}
              image={imageMap[partner.filename]}
              descriptionMdx={descriptionMdxMap[partner.filename]}
            />
          ))}
        </PartnerCards>
      </ScreenContainer>
    </>
  )
}

export default Partners
