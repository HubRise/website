import { colors } from "@utils/styles"

export type ContainerBgColor = "green" | "backgroundLight"
export type ContainerVerticalPadding = "small" | "big"

type ContainerBgColorMap = Record<ContainerBgColor, string>
type ContainerVerticalPaddingMap = Record<ContainerVerticalPadding, string>

const linkContainerBgColorMap: ContainerBgColorMap = {
  green: colors.primary,
  backgroundLight: colors.backgroundLight,
}

const linkContainerVerticalPaddingMap: ContainerVerticalPaddingMap = {
  small: "3.5rem 0",
  big: "5.5rem 0",
}

export const linkContainerBgColor = (bgColor: ContainerBgColor) => linkContainerBgColorMap[bgColor]
export const linkContainerVerticalPadding = (vPadding: ContainerVerticalPadding) =>
  linkContainerVerticalPaddingMap[vPadding]
