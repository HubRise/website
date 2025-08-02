import { colors } from "@utils/styles"

export type HeroAppColor = "topDark" | "bottom" | "topLight"

export const linkHeroAppBorderColor = (color: HeroAppColor) => {
  switch (color) {
    case "topDark":
      return colors.primary
    case "bottom":
      return colors.greenLight
    case "topLight":
      return colors.greenMediumLight
  }
}

export const getHeroAppsImageSource = (color: HeroAppColor) => {
  switch (color) {
    case "topDark":
      return "/images/frontpage/hero-apps-top-dark.svg"
    case "bottom":
      return "/images/frontpage/hero-apps-bottom.svg"
    case "topLight":
      return "/images/frontpage/hero-apps-top-light.svg"
  }
}
