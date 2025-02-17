import { SidePosition } from "@components/Block/utils"

import { HeroAppColor } from "./Hero/utils"

export type TMetric = {
  number: string
  title: string
}

export type THeroApp = {
  title: string
  type: string
  color: HeroAppColor
}

export type TFeatureCard = {
  title: string
  description: string
  image: string
}

export type TIntegrationApp = {
  title: string
  afterExpansion: boolean
  image: string
  sidePosition: SidePosition
  advantages: Array<{
    text: string
  }>
  button_label: string
  button_link: string
}

export type TTestimonial = {
  name: string
  job_title: string
  text: string
  logo: string
}

export type TApp = {
  logo: string
}

export interface FrontpageYaml {
  path: string
  meta: {
    title: string
    description: string
  }
  hero: {
    title: {
      start: string
      highlight1: string
      highlight2: string
      and: string
    }
    description: string
    button_label: string
    apps: Array<THeroApp>
  }
  content: {
    metrics: Array<TMetric>
    apps: Array<TApp>
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
    }
    integrations: {
      title: string
      integration_apps: Array<TIntegrationApp>
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
      testimonials: Array<TTestimonial>
    }
  }
}
