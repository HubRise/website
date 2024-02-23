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
  id: number
  name: string
  site_url: string
  image_name: string
  descriptions: Array<string>
}
