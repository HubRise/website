export interface TestimonialsYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    title: string
    description: string
    testimonials: Array<TTestimonial>
  }
}

export interface TTestimonial {
  quote: string
  person_details: Array<string>
  filename: string
}
