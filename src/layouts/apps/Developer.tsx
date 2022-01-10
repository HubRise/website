import * as React from "react"

import { IDevelopers } from "./interface"

interface DevelopersProps {
  developers: IDevelopers
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description } = developers

  return (
    <section
      className={`
      section
      section_full-width
      section_padding
    `}
    >
      <div
        className={`
        section__in
        section__in
        section__in_green
        section__in_padding
      `}
      >
        <h3 className="section__title section__title_white">{title}</h3>
        <p className="section__description_white">{description.paragraph_1}</p>
        <p className="section__description_white">
          {description.paragraph_2.chunk_1}
          <br />
          {description.paragraph_2.chunk_2}
        </p>
      </div>
    </section>
  )
}

export default Developer
