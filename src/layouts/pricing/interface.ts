export interface IPricing {
  path: string
  meta: IMeta
  content: {
    hero: IHero
    offer: IOffer
    specials: Array<ISpecial>
  }
}

export interface IMeta {
  title: string
  description: string
}

export interface IHero {
  title: string
}

export interface IOffer {
  pricing: {
    chunk_1: string
    chunk_2: string
  }
  features: Array<string>
  link: {
    text: string
    to: string
  }
}

export interface ISpecial {
  highlight: string
  text: string
  link?: {
    text: string
    to: string
  }
  button?: string
}
