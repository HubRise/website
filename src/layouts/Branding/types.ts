export interface BrandingYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: {
      title: {
        part_1: string
        part_2: string
      }
      description: string
    }
    sections: Array<{
      title: string
      content: string
    }>
  }
}
