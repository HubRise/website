export interface TestimonialsYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    title: string
    block_title: string
    description: string
    testimonials: Array<TTestimonial>
  }
}

export interface TTestimonial {
  quote: string
  id: number
  person_details: {
    name: string
    job_title: string
    company: string
    logo: string
  }
  filename: string
}
