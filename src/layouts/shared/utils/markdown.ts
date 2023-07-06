import { remark } from "remark"
import remarkHtml from "remark-html"

export const markdownToHtml = (markdown: string): string => {
  return remark().use(remarkHtml).processSync(markdown.replace(/\n/g, "\n\n")).toString()
}
