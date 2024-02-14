export interface PricingYaml {
  path: string
  meta: {
    title: string
    description: string
  }
  content: {
    hero: {
      title: string
    }
    plan: {
      pricing: {
        chunk_1: string
        chunk_2: string
      }
      features: Array<string>
      link: {
        text: string
        to: string
      }
    }
    infos: Array<{
      title: string
      text: string
      link?: {
        text: string
        to: string
      }
      button?: string
    }>
  }
}
