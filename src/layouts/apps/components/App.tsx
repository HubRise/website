import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'

import { IAdditionalSections, IApp } from '../interface'
import Link from '@components/Link'
import { generateKey } from '@utils/misc'
import { ImageNode } from '@utils/image'

interface AppSectionProps {
  title: string
  showTitle: boolean
  apps: Array<IApp>
  logoNodes: Array<AppImageNode>
  additionalSections: IAdditionalSections
  hasSuggestApp: boolean
}

export type AppImageNode = ImageNode & { base: string }

const App = ({
  title,
  showTitle,
  apps,
  logoNodes,
  additionalSections,
  hasSuggestApp
}: AppSectionProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <section className="section section__center">
      {showTitle && <h3 className="section__title">{title}</h3>}

      <div className="apps">
        {apps.map((app, idx) => {
          const logo = logoNodes.find(({ base }) => base === app.logo)
          if (!logo) throw new Error(`${title} does not have a logo`)

          return (
            <Link
              key={generateKey(title, idx)}
              to={app.documentation || app.website}
              className="apps__box"
            >
              <GatsbyImage
                image={logo.childImageSharp.gatsbyImageData}
                className="apps__logo"
                imgStyle={{ objectFit: 'scale-down' }}
                alt={title}
              />

              <div className="apps__documentation">
                {app.documentation
                  ? t('apps.view_documentation')
                  : t('apps.visit_website')}
              </div>

              <div className="apps__description">{app.description}</div>

              {app.additional_info && (
                <div className="apps__additional-info">
                  {app.additional_info}
                </div>
              )}
            </Link>
          )
        })}

        {hasSuggestApp && (
          <SuggestApp
            description={additionalSections.suggest_app.description}
          />
        )}
      </div>
    </section>
  )
}

export default App

interface SuggestAppProps {
  description: string
}

const SuggestApp = ({ description }: SuggestAppProps): JSX.Element => (
  <div className="apps__box apps__box_suggest">
    {description}
    <div className="apps__suggest-email">
      <Link to="mailto:contact@hubrise.com">contact@hubrise.com</Link>
    </div>
  </div>
)
