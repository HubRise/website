import { HeroAppColor } from "./Hero/utils"

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
    apps: Array<{
      title: string
      type: string
      color: HeroAppColor
    }>
  }
  content: {
    numbers: Array<{
      number: string
      title: string
    }>
    apps: {
      title: string
      description: string
      link_url: string
      categories: Array<string>
    }
    api: {
      title: string
      description: string
      image: string
    }
    documentation: {
      title: string
      description: string
      image: string
    }
    pricing: {
      title: string
      description: string
      button_label: string
      button_url: string
      link_label: string
      link_url: string
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
