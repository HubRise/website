"use client"

import ActionBlock from "@components/ActionBlock"

import Hero from "./Hero"
import ThumbList from "./ThumbList"
import type { DocumentationIndexYaml } from "./types"

const DocumentationIndex = ({ yaml }: { yaml: DocumentationIndexYaml }): JSX.Element => {
  return (
    <>
      <Hero {...yaml.content.hero} />
      <ThumbList thumbs={yaml.content.thumbs} />
      <ActionBlock actionBlockData={yaml.content.action_block} />
    </>
  )
}

export default DocumentationIndex
