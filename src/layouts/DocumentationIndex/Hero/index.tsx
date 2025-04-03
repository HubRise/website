import PageHero from "@components/PageHero"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"

import { HeroDescription } from "./Styles"

const Hero = (hero: DocumentationIndexYaml["content"]["hero"]): JSX.Element => {
  const { slug, title, description } = hero

  const renderTitle = () => {
    if (slug === "developers") {
      return (
        <>
          {title.connect} <span>{title.app}</span> {title.to} <span>{title.hubrise}</span>
        </>
      )
    }

    if (slug === "contributing") {
      return <>{title}</>
    }
  }

  return (
    <PageHero title={renderTitle()}>
      <HeroDescription>{description}</HeroDescription>
    </PageHero>
  )
}

export default Hero
