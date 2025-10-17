export interface TestimonialsYaml {
  meta: {
    title: string
    description: string
  }
  content: {
    title: {
      part_1: string
      part_2: string
      part_3: string
      part_4: string
    }
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
    logo: string | null
  }
  filename: string
}
