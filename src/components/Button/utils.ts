import { colors } from "@utils/styles"

export type ButtonType = "primary" | "secondary" | "tertiary" | "link"

export const linkButtonBgColor = (type: ButtonType) => {
  switch (type) {
    case "primary":
      return colors.primary
    case "secondary":
      return colors.backgroundLight
    case "tertiary":
      return colors.white
    case "link":
      return "transparent"
    default:
      return colors.primary
  }
}

export const linkButtonColor = (type: ButtonType) => {
  switch (type) {
    case "primary":
      return colors.white
    case "secondary":
      return colors.textDark
    case "tertiary":
      return colors.textDark
    case "link":
      return colors.textDark
    default:
      return colors.white
  }
}
