import { colors } from "@utils/styles"

export type HeroAppColor = "green" | "greenLight" | "greenMediumLight"

type HeroAppColorMap = Record<HeroAppColor, string>

const linkHeroAppColorMap: HeroAppColorMap = {
  green: colors.green,
  greenLight: colors.greenLight,
  greenMediumLight: colors.greenMediumLight,
}

export const linkHeroAppBorderColor = (color: HeroAppColor) => linkHeroAppColorMap[color]
