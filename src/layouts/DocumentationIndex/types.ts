import { TGetStarted } from "@components/GetStarted/types"

type TDevelopersTitle = {
  connect: string
  app: string
  to: string
  hubrise: string
}

export interface DocumentationIndexYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: {
      slug: "developers" | "contributing"
      title: TDevelopersTitle
      description: string
    }
    thumbs: Array<{
      title: string
      description: string
      to: string
      icon: string
    }>
    getStarted: TGetStarted
  }
}
