import { colors } from "@utils/styles"

export type HeroAppColor = "green" | "greenLight" | "greenMediumLight"

type HeroAppColorMap = Record<HeroAppColor, string>

const linkHeroAppColorMap: HeroAppColorMap = {
  green: colors.primary,
  greenLight: colors.greenLight,
  greenMediumLight: colors.greenMediumLight,
}

const heroAppsImageSourceMap: HeroAppColorMap = {
  green: "/images/frontpage/hero-apps-top.svg",
  greenLight: "/images/frontpage/hero-apps-bottom-light.svg",
  greenMediumLight: "/images/frontpage/hero-apps-top-midlight.svg",
}

export const linkHeroAppBorderColor = (color: HeroAppColor) => linkHeroAppColorMap[color]
export const getHeroAppsImageSource = (color: HeroAppColor) => heroAppsImageSourceMap[color]
