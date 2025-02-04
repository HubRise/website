import { SidePosition } from "@components/Block/utils"

import { HeroAppColor } from "./Hero/utils"

export type TMetric = {
  number: string
  title: string
}

export type TApp = {
  title: string
  type: string
  color: HeroAppColor
}

export type TUseBlock = {
  title: string
  description: string
  image: string
  width: number
  desktop_width: number
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
    apps: Array<TApp>
  }
  content: {
    metrics: Array<TMetric>
    use: {
      title: string
      description: string
      use_blocks: Array<TUseBlock>
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
    developers: {
      title: string
      description: string
      team_members: Array<{
        name: string
        filename: string
      }>
    }
    mission_and_scalability: {
      mission: {
        title: string
        description: string
      }
      scalability: {
        title: string
        description: string
      }
    }
    join: {
      title: string
      button_label: string
      button_url: string
      link_label: string
      link_url: string
    }
  }
}
