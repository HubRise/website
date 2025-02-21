type TFAQSection = {
  title: string
  questions: Array<{
    question: string
    answer: string
    isOpenedByDefault: boolean
  }>
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
