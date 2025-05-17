import { TFiveSteps } from "@components/FiveSteps"
import { TTwoSidesContent } from "@components/TwoSidesContent"

export type TOrderlineHero = {
  title: {
    centralise: string
    all: string
    orders: string
    operations: string
  }
  supporting_text: string
  content: TTwoSidesContent
}

export type TFeatures = {
  title: string
  description: string
  button_label: string
  button_link: string
  list: Array<{
    title: string
    image: string
    description: string
  }>
}

export type TDiscover = {
  title: string
  description: string
  buttons: Array<{
    button_label: string
    button_link: string
  }>
}

export interface OrderlineYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: TOrderlineHero
    five_steps: TFiveSteps
    features: TFeatures
    discover: TDiscover
  }
}
