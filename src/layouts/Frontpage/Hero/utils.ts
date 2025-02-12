import { colors } from "@utils/styles"

export type HeroAppColor = "green" | "greenLight" | "greenMediumLight"

export const linkHeroAppBorderColor = (color: HeroAppColor) => {
  switch (color) {
    case "green":
      return colors.primary
    case "greenLight":
      return colors.greenLight
    case "greenMediumLight":
      return colors.greenMediumLight
    default:
      return colors.primary
  }
}

export const getHeroAppsImageSource = (color: HeroAppColor) => {
  switch (color) {
    case "green":
      return "/images/frontpage/hero-apps-top.svg"
    case "greenLight":
      return "/images/frontpage/hero-apps-bottom-light.svg"
    case "greenMediumLight":
      return "/images/frontpage/hero-apps-top-midlight.svg"
    default:
      return "/images/frontpage/hero-apps-top.svg"
  }
}
