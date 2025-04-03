"use client"

import Hero from "./Hero"
import ThumbList from "./ThumbList"
import type { DocumentationIndexYaml } from "./types"

const DocumentationIndex = ({ yaml }: { yaml: DocumentationIndexYaml }): JSX.Element => {
  return (
    <>
      <Hero {...yaml.content.hero} />

      <ThumbList thumbs={yaml.content.thumbs} />
    </>
  )
}

export default DocumentationIndex
