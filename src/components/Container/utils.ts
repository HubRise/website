import { colors } from "@utils/styles"

export type ContainerBgColor = "green" | "backgroundLight"
export type ContainerVerticalPadding = "small" | "big"

export const linkContainerBgColor = (bgColor: ContainerBgColor) => {
  switch (bgColor) {
    case "green":
      return colors.primary
    case "backgroundLight":
      return colors.backgroundLight
    default:
      return colors.primary
  }
}

export const linkContainerVerticalPadding = (vPadding: ContainerVerticalPadding) => {
  switch (vPadding) {
    case "small":
      return "3.5rem 0"
    case "big":
      return "5.5rem 0"
    default:
      return "3.5rem 0"
  }
}
