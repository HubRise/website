export interface DocumentationIndexYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: {
      title: string
      description: {
        paragraph_1: string
        paragraph_2: {
          button: string
          text: string
        }
      }
    }
    thumbs: Array<{
      title: string
      description: string
      to: string
      icon: string
    }>
  }
}
