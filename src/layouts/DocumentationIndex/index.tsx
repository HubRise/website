"use client"

import ActionBlock from "@components/ActionBlock"
import { ContentImageMap } from "@utils/contentImage"

import Hero from "./Hero"
import ThumbList from "./ThumbList"
import type { DocumentationIndexYaml } from "./types"

interface DocumentationIndexProps {
  yaml: DocumentationIndexYaml
  thumbIconsMap: ContentImageMap
}

const DocumentationIndex = ({ yaml, thumbIconsMap }: DocumentationIndexProps): JSX.Element => {
  return (
    <>
      <Hero {...yaml.content.hero} />
      <ThumbList thumbs={yaml.content.thumbs} thumbIconsMap={thumbIconsMap} />
      <ActionBlock actionBlockData={yaml.content.action_block} />
    </>
  )
}

export default DocumentationIndex
