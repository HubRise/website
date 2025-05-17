import { TActionBlock } from "@components/ActionBlock"
import { TTwoSidesContent } from "@components/TwoSidesContent"

export type THero = {
  title: {
    part_1: string
    part_2: string
    part_3: string
    part_4: string
  }
  description: string
  content: TTwoSidesContent
}

export type TFeature = {
  title: string
  description: string
  image: string
}

export interface DashboardYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: THero
    features: {
      title: string
      cards: Array<TFeature>
    }
    details: {
      title: string
    }
    action_block: TActionBlock
  }
}
