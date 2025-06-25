export interface IFooter {
  sections: Array<{
    title: string
    links: Array<{
      title: string
      icon?: string
      to: string
      is_external?: boolean
    }>
  }>
  copyright_links: Array<{
    title: string
    link: string
  }>
}
