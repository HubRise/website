import * as React from "react"

import { Container } from "./Styles"

interface MdxCustomRendererProps {
  title?: string
  body: React.ReactNode
}

const MdxCustomRenderer = ({ title, body }: MdxCustomRendererProps): JSX.Element => (
  <Container>
    {title && <h1>{title}</h1>}
    {body}
  </Container>
)

export default MdxCustomRenderer
