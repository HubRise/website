import { otherLanguages } from "@utils/locales"

export const isHeaderLinkActive = (currentPathName: string, link: string): boolean => {
  if (link === "/" || otherLanguages.map((lang) => `/${lang}`).includes(link)) {
    // Special case for home page
    return currentPathName === link
  } else {
    return currentPathName.startsWith(link)
  }
}
