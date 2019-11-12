import { graphql } from 'gatsby'

export const Image = graphql`
  fragment Image on File {
    name
    base
    publicURL
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }
`
