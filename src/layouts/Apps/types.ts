export type TCountry = {
  title: string
  code: string
}

export interface AppsYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: {
      title: string
      description: {
        paragraph_1_text: string
        paragraph_1_link_text: string
        paragraph_2_text: string
        paragraph_2_link_text: string
        paragraph_2_link_to: string
      }
    }
    all_apps: string
    categories: Array<{
      title: string
      slug: string
      has_suggest_app: boolean
      apps: Array<{
        website: string | null | undefined
        documentation: string | null | undefined
        logo: string
        country: string | null | undefined
        title: string
        description: string
        additional_info: string | null | undefined
      }>
    }>
    countries: Array<TCountry>
    additional_sections: {
      suggest_app: {
        description: string
      }
    }
    developers: {
      title: string
      description: {
        paragraph_1: string
        paragraph_2: {
          chunk_1: string
          chunk_2: string
        }
      }
    }
  }
}
