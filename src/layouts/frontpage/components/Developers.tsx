import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { markdownToHtml } from '@utils/misc'
import { ImageNode } from '@utils/image'

interface DevelopersProps {
  title: string
  description: string
  team_members: Array<{
    // TODO: create proper type in src/data
    name: string
    filename: string
  }>
  teamImages: {
    nodes: Array<TeamImageNode>
  }
}

export type TeamImageNode = ImageNode & { base: string }

const Developers = ({
  title,
  description,
  team_members,
  teamImages
}: DevelopersProps): JSX.Element => {
  return (
    <section className="frontpage-developers">
      <div className="frontpage-developers__inside">
        <div className="frontpage-developers__text">
          <h3 className="frontpage-developers__title">{title}</h3>
          <div
            className="frontpage-developers__description"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
          />

          <ul className="frontpage-developers__team">
            {team_members.map(({ name, filename }, idx) => {
              const image = teamImages.nodes.find(
                ({ base }) => base === filename
              )
              if (!image)
                throw new Error(`Team member ${name} does not have a picture`)

              return (
                <li className="frontpage-developers__team-member" key={idx}>
                  <GatsbyImage
                    className="frontpage-developers__member-picture"
                    image={image.childImageSharp.gatsbyImageData}
                    alt={name}
                  />
                  <div className="frontpage-developers__member-name">
                    {name}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Developers
