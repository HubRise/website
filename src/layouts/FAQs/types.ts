export type TQuestion = {
  question: string
  id: number
  answer: string
}

export type TFAQSection = {
  title: string
  questions: Array<TQuestion>
}

export interface FAQsYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    hero: {
      title: {
        part_1: string
        part_2: string
      }
    }
    faq_sections: Array<TFAQSection>
  }
}
