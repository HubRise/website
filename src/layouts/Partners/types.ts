export interface PartnersYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    title: string
    description: string
    partners: Array<Partners>
  }
}

export interface Partners {
  name: string
  site_url: string
  filename: string
  descriptions: Array<string>
}
