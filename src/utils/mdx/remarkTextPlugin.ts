import { Literal } from "mdast"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

import { text } from "@utils/misc"

export type HeaderLink = { title: string; depth: number; generatedId: string; customId?: string }

/**
 * Replace spaces with non-breaking spaces before punctuation
 */
const remarkTextPlugin = () => {
  return function transformer(node: Node, _file: VFile) {
    visit(node, "text", (child: Literal) => {
      child.value = text(child.value)
    })
  }
}

export default remarkTextPlugin
