import { TMetric } from "@components/Metrics"

import { HeroAppColor } from "./Hero/utils"

export type THeroTitle = {
  part_1: string
  part_2: string
  part_3: string
  part_4: string
}

export type THeroAppCategory = {
  title: string
  type: string
  color: HeroAppColor
}

export type TFeatureCard = {
  title: string
  description: string
  image: string
}

export type TIncludedApp = {
  title: string
  image: string
  advantages: Array<{
    text: string
  }>
  button_label: string
  button_link: string
}

export interface FrontpageYaml {
  path: string
  meta: {
    title: string
    description: string
  }
  hero: {
    title: THeroTitle
    description: string
    button_label: string
    button_link: string
    app_categories: Array<THeroAppCategory>
  }
  content: {
    metrics: Array<TMetric>
    features: {
      title: string
      description: string
      features_cards: Array<TFeatureCard>
    }
    pricing: {
      title: {
        start: string
        price: string
        end: string
      }
      description: string
      button_label: string
      button_link: string
    }
    included_apps: {
      title: string
      description: string
      apps: Array<TIncludedApp>
    }
    partners: {
      title: string
      description: string
      button_label: string
      button_link: string
      image: string
    }
    testimonials: {
      title: string
      description: string
      list: Array<number>
    }
  }
}
