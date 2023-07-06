export interface IPricing {
  path: string
  meta: IMeta
  content: {
    hero: IHero
    plan: IPlan
    infos: Array<IInfo>
  }
}

export interface IMeta {
  title: string
  description: string
}

export interface IHero {
  title: string
}

export interface IPlan {
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

export interface IInfo {
  highlight: string
  text: string
  link?: {
    text: string
    to: string
  }
  button?: string
}
