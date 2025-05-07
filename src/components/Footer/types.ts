export interface IFooter {
  sections: Array<{
    title: string
    links: Array<{
      title: string
      to: string
    }>
  }>
}
