type TProposal = {
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
    simple: string
    fair: string
    and: string
    transparent: string
    pricing: string
  }
  plan: {
    price: string
    tax: string
    period: string
  }
  proposals: Array<TProposal>
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
    special_proposal: string
  }
  dark_kitchen: {
    title: string
    description: string
    pricing_list_description: string
    pricing_list: Array<TSpecialPricingItem>
    special_proposal: string
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
  }
}
