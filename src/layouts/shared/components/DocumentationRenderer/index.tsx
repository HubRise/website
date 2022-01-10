import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Container } from "./Styles"

interface DocumentationRendererProps {
  title?: string
  body: string
}

const DocumentationRenderer = ({ title, body }: DocumentationRendererProps): JSX.Element => (
  <Container>
    {title && <h1>{title}</h1>}
    <MDXRenderer>{body}</MDXRenderer>
  </Container>
)

export default DocumentationRenderer
