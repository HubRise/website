import { TActionBlock } from "@components/ActionBlock"
import { TMetric } from "@components/Metrics"
import { TTabItem } from "@components/Tabs"
import { TTwoSidesContent } from "@components/TwoSidesContent"

export type THero = {
  title: {
    part_1: string
    part_2: string
    part_3: string
    part_4: string
  }
  description: string
}

export type TFeature = {
  title: string
  description: string
}

export type TBenefitCard = {
  title: string
  description: string
  image: string
}

export type TMiddleware = {
  title: string
  description: string
  content: TTwoSidesContent
}

interface TAppsTab extends TTabItem {
  content: {
    title: string
    description: string
    image: string
  }
}

export type TApps = {
  title: string
  description: string
  tabs: Array<TAppsTab>
}

export interface BecomePartnerYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: THero
    features: Array<TFeature>
    benefits: {
      title: string
      benefit_cards: Array<TBenefitCard>
    }
    middleware: TMiddleware
    apps: TApps
    metrics: Array<TMetric>
    testimonials: {
      title: string
      description: string
      list: Array<number>
    }
    action_block: TActionBlock
  }
}
