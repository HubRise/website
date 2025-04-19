export interface IFooter {
  sections: Array<{
    title: string
    links: Array<{
      title: string
      icon?: string
      to: string
    }>
  }>
  copyright: {
    terms_link: {
      title: string
      link: string
    }
  }
}
