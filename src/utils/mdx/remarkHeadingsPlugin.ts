import { Heading } from "mdast"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

import { createHeaderAnchor } from "@utils/misc"

export type HeaderLink = { title: string; depth: number; generatedId: string; customId?: string }

interface HProperties {
  id?: string
  [key: string]: unknown
}

const remarkHeadingsPlugin = (headerLinks: Array<HeaderLink>) => {
  return function transformer(node: Node, _file: VFile) {
    visit(node, `heading`, (heading: Heading) => {
      const textNode = heading.children.find((child) => child.type === "text") as { value: string }

      // Optional custom id
      // Informations envoyées à Deliveroo {#information-sent-to-deliveroo}
      // -> information-sent-to-deliveroo
      let customId: string | undefined
      const match = /(.*)\s+{#(.*)}$/.exec(textNode.value)
      if (match) {
        textNode.value = match[1] // Strip the anchor from the text
        customId = match[2]
      }

      // Generated id
      const generatedId = createHeaderAnchor(textNode.value)

      // Add id to heading
      heading.data = heading.data || {}
      heading.data.hProperties = heading.data.hProperties || {}
      ;(heading.data.hProperties as HProperties).id = generatedId

      headerLinks.push({
        title: (heading.children[0] as any).value,
        depth: heading.depth,
        generatedId,
        customId,
      })
    })
  }
}

export default remarkHeadingsPlugin
