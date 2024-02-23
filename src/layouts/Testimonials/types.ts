export interface TestimonialsYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    title: string
    description: string
    testimonials: Array<Testimonial>
  }
}

export interface Testimonial {
  id: number
  description: string
  person_details: Array<string>
  filename: string
}
