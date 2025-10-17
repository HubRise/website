export interface PartnersYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    title: string
    description: string
    partners: Array<Partner>
  }
}

export interface Partner {
  name: string
  site_url: string
  filename: string
  description: string
}
