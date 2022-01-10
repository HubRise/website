import * as React from "react"

import { Title, Description, Container, Column1, Column2 } from "./Styles"

import { markdownToHtml } from "@utils/misc"

interface MissionAndScalabilityProps {
  // TODO: create proper type in src/data
  mission: {
    title: string
    description: string
  }
  scalability: {
    title: string
    description: string
  }
}

const MissionAndScalability = ({ mission, scalability }: MissionAndScalabilityProps): JSX.Element => {
  return (
    <Container>
      <Column1>
        <Title>{mission.title}</Title>
        <Description
          dangerouslySetInnerHTML={{
            __html: markdownToHtml(mission.description),
          }}
        />
      </Column1>

      <Column2>
        <Title>{scalability.title}</Title>
        <Description
          dangerouslySetInnerHTML={{
            __html: markdownToHtml(scalability.description),
          }}
        />
      </Column2>
    </Container>
  )
}

export default MissionAndScalability
