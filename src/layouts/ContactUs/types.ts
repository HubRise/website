type TContactUsCard = {
  title: string
  description: string
  email: string
  buttons?: Array<{
    button_label: string
    button_link?: string
    popup_link?: boolean
  }>
}

export type THero = {
  title: {
    part_1: string
    part_2: string
  }
  cards: Array<TContactUsCard>
}

export type TMap = {
  title: string
  description: string
  image: string
  address: string
}

export interface ContactUsYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: THero
    map: TMap
  }
}
