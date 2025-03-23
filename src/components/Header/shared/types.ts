export type TProduct = {
  title: string
  description: string
  link_label: string
  link: string
  image: string
}

export type TResources = {
  title: string
  description: string
  links: Array<{
    link_label: string
    link: string
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
