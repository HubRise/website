export type TProduct = {
  title: string
  description: string
  link_label: string
  link: string
  image: string
}

export type TResources = {
  get_in_touch: {
    main_question: string
    question: string
    button_label: string
    button_link: string
  }
  links: Array<{
    link_label: string
    link: string
    link_description: string
  }>
}

export interface IHeaderLink {
  title: string
  to: string
  content?: {
    products?: Array<TProduct>
    resources?: TResources
  }
  mobile_only?: boolean
}
