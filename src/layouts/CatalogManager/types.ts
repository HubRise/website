import { TActionBlock } from "@components/ActionBlock"
import { TFiveSteps } from "@components/FiveSteps"
import { TTabItem } from "@components/Tabs"
import { TTwoSidesContent } from "@components/TwoSidesContent"

export type THero = {
  title: {
    part_1: string
    part_2: string
  }
  description: string
  content: TTwoSidesContent
}

export type TSalesChannels = {
  title: string
  description: string
}

interface TAppsTab extends TTabItem {
  content: {
    title: string
    description: string
    image: string
  }
}

export type TApp = {
  title: string
  description: string
  tabs: Array<TAppsTab>
}

export interface CatalogManagerYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: THero
    sales_channels: TSalesChannels
    five_steps: TFiveSteps
    app: TApp
    action_block: TActionBlock
  }
}
