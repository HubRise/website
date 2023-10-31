import { colors } from "@utils/styles"

export type BackgroundColor = "none" | "white" | "green"

export type HorizontalAlign = "left" | "center" | "centerOnMobile"

export type VerticalAlign = "top" | "center"

export type VerticalSpacing = "small" | "large"

export type Padding = "small" | "large"

export type SidePosition = "left" | "right"

type ColorMap = Record<BackgroundColor, string>

export const bgColorMap: ColorMap = {
  none: "transparent",
  white: colors.white,
  green: colors.primary,
}

export const titleColorMap: ColorMap = {
  none: colors.textDarkest,
  white: colors.textDarkest,
  green: colors.white,
}

export const linkColorMap: ColorMap = {
  none: colors.primary,
  white: colors.primary,
  green: colors.white,
}

export const linkOverColorMap: ColorMap = {
  none: colors.textDark,
  white: colors.textDark,
  green: colors.textDarkest,
}

export const colorMap: ColorMap = {
  none: colors.textMedium,
  white: colors.textMedium,
  green: colors.white,
}
