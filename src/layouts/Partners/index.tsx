"use client"

import Block from "@components/Block"
import { ContentImageMap } from "@utils/contentImage"

import Partner from "./Partner"
import type { PartnersYaml } from "./types"

interface PartnersProps {
  yaml: PartnersYaml
  imageMap: ContentImageMap
}

const Partners = ({ yaml, imageMap }: PartnersProps) => {
  const { content } = yaml

  return (
    <>
      <Block
        padding="small"
        backgroundColor="white"
        verticalSpacing="small"
        horizontalAlign="center"
        title={content.title}
      >
        {content.description}
      </Block>

      {content.partners.map((partner, index) => (
        <Partner key={index} partner={partner} image={imageMap[partner.filename]} />
      ))}
    </>
  )
}

export default Partners
