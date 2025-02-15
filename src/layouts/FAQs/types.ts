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
    title_part_1: string
    title_part_2: string
    faq_sections: Array<TFAQSection>
  }
}
