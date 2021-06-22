import { RootContext } from '@utils/context'

export interface AppsContext extends RootContext {
  apps: IApps
  categoryTitle?: string
}

export interface IApps {
  /** Path to the main apps page on the site, eg "/apps" or "/fr/apps". This field is generated. */
  path: string
  meta: IMeta
  content: {
    hero: IHero
    all_apps: string
    categories: Array<ICategory>
    additional_sections: IAdditionalSections
    developers: IDevelopers
  }
}

export interface IMeta {
  title: string
  description: string
}

export interface IApp {
  website: string
  documentation: string
  logo: string
  title: string
  description: string
  additional_info: string
}

export interface ICategory {
  /** Path to the page on the site, eg "/fr/apps/gestion-de-livreurs". This field is generated. */
  path: string
  title: string
  has_suggest_app: boolean
  apps: Array<IApp>
}

export interface IHero {
  title: string
  description: {
    paragraph_1_text: string
    paragraph_1_link_text: string
    paragraph_2_text: string
    paragraph_2_link_text: string
    paragraph_2_link_to: string
  }
}

export interface IAdditionalSections {
  suggest_app: {
    description: string
  }
}

export interface IDevelopers {
  title: string
  description: {
    paragraph_1: string
    paragraph_2: {
      chunk_1: string
      chunk_2: string
    }
  }
}
