import * as React from 'react'

import { markdownToHtml } from '@utils/misc'

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

const MissionAndScalability = ({
  mission,
  scalability
}: MissionAndScalabilityProps): JSX.Element => {
  return (
    <section className="frontpage-two-cols">
      <div className="frontpage-two-cols__first">
        <h3 className="frontpage-two-cols__title">{mission.title}</h3>
        <div
          className="frontpage-two-cols__description"
          dangerouslySetInnerHTML={{
            __html: markdownToHtml(mission.description)
          }}
        />
      </div>

      <div className="frontpage-two-cols__second">
        <h3 className="frontpage-two-cols__title">{scalability.title}</h3>
        <div
          className="frontpage-two-cols__description"
          dangerouslySetInnerHTML={{
            __html: markdownToHtml(scalability.description)
          }}
        />
      </div>
    </section>
  )
}

export default MissionAndScalability
