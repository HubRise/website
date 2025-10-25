import PageHero from "@components/PageHero"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"

const Hero = (hero: DocumentationIndexYaml["content"]["hero"]): JSX.Element => {
  const { slug, title, description } = hero

  const renderTitle = () => {
    if (slug === "developers") {
      return (
        <>
          {title.part_1} <span>{title.part_2}</span> {title.part_3} <span>{title.part_4}</span>
        </>
      )
    }

    if (slug === "contributing") {
      return (
        <>
          <span>{title.part_1}</span> {title.part_2} <span>{title.part_3}</span>
        </>
      )
    }
  }

  return <PageHero title={renderTitle()} description={description} />
}

export default Hero
