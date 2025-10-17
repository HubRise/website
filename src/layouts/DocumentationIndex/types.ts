import { TActionBlock } from "@components/ActionBlock"

type THeroTitle = {
  part_1?: string
  part_2?: string
  part_3?: string
  part_4?: string
}

export interface DocumentationIndexYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: {
      slug: "developers" | "contributing"
      title: THeroTitle
      description: string
    }
    thumbs: Array<{
      title: string
      description: string
      to: string
      icon: string
    }>
    action_block: TActionBlock
  }
}
