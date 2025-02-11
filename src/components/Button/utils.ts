import { colors } from "@utils/styles"

export type ButtonType = "primary" | "secondary" | "tertiary"

type ButtonTypeMap = Record<ButtonType, string>

const linkButtonBgColorMap: ButtonTypeMap = {
  primary: colors.primary,
  secondary: colors.backgroundLight,
  tertiary: colors.white,
}

const linkButtonColorMap: ButtonTypeMap = {
  primary: colors.white,
  secondary: colors.textDark,
  tertiary: colors.textDark,
}

export const linkButtonBgColor = (type: ButtonType) => linkButtonBgColorMap[type]
export const linkButtonColor = (type: ButtonType) => linkButtonColorMap[type]
