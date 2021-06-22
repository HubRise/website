import * as React from 'react'
import { graphql } from 'gatsby'

import { generateKey } from '@utils/misc'
import SEO from '@components/Seo'
import { AppsContext } from './interface'
import { App, Developer, Hero, Nav } from './components'
import { AppImageNode } from './components/App'

interface AppsProps {
  data: AppsData
  path: string
  pageContext: AppsContext
}

interface AppsData {
  logos: {
    nodes: Array<AppImageNode>
  }
}

export const graphqlQuery = graphql`
  query appsData {
    logos: allFile(
      filter: {
        absolutePath: { glob: "**/content/images/app-logos/*" }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        base
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

const Apps = ({ data, pageContext, path }: AppsProps): JSX.Element => {
  const { logos } = data
  const { localeCode, apps, categoryTitle } = pageContext
  const { meta, content, path: allAppsPath } = apps

  return (
    <>
      <SEO localeCode={localeCode} meta={meta} />

      <Hero hero={content.hero} />

      <Nav
        categories={content.categories}
        currentPath={path}
        allAppsPath={allAppsPath}
        allAppsLabel={content.all_apps}
      />

      {content.categories.map(({ title, apps, has_suggest_app }, idx) => {
        if (!categoryTitle || categoryTitle === title) {
          return (
            <App
              key={generateKey(title, idx)}
              title={title}
              showTitle={!categoryTitle}
              apps={apps}
              logoNodes={logos.nodes}
              additionalSections={content.additional_sections}
              hasSuggestApp={has_suggest_app}
            />
          )
        }
      })}
      <Developer developers={content.developers} />
    </>
  )
}

export default Apps

export type { AppsContext } from './interface'
