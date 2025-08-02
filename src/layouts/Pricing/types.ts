import { TActionBlock } from "@components/ActionBlock"

type TSellingPoint = {
  title: string
  text: string
}

type TFeature = {
  text: string
  link_label?: string
  link?: string
}

type TWhyChooseCard = {
  title: string
  text: string
}

type TSpecialPricingItem = {
  text: string
  price: string
}

export type THero = {
  title: {
    part_1: string
    part_2: string
    part_3: string
    part_4: string
  }
  plan: {
    price: string
    period: string
  }
  selling_points: Array<TSellingPoint>
  included_features: {
    title: string
    description: string
    button_label: string
    button_link: string
    list: Array<TFeature>
  }
  additional_features: {
    title: string
    description: string
    list: Array<TFeature>
  }
}

export type TSpecialPricing = {
  title: string
  chain_and_franchise: {
    title: string
    description: string
    pricing_list: Array<TSpecialPricingItem>
    special_proposal_html: string
  }
  dark_kitchen: {
    title: string
    description: string
    pricing_list_description: string
    pricing_list: Array<TSpecialPricingItem>
    special_proposal_html: string
  }
  resellers_and_partners: {
    title: string
    description: string
    button_label: string
    button_link: string
  }
}

export type TWhyChoose = {
  title: string
  cards: Array<TWhyChooseCard>
}

export interface PricingYaml {
  path: string
  meta: {
    title: string
    description: string
  }
  content: {
    hero: THero
    founder: {
      image: string
      name: string
      job_title: string
      text: string
    }
    why_choose: TWhyChoose
    special_pricing: TSpecialPricing
    action_block: TActionBlock
  }
}
