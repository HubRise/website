import { TActionBlock } from "@components/ActionBlock"

type THeroTitle = {
  connect?: string
  contribute?: string
  app?: string
  to?: string
  hubrise?: string
  doc?: string
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
