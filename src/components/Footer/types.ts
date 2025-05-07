export interface IFooter {
  sections: Array<{
    title: string
    links: Array<{
      title: string
      icon?: string
      to: string
    }>
  }>
  copyright_links: Array<{
    title: string
    link: string
  }>
}
