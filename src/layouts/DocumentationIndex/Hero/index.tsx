import Block from "@components/Block"
import { BlockContent, BlockContentButton } from "@components/BlockContent"
import { useLayoutContext } from "@components/LayoutContext"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"
import { text } from "@utils/misc"

const Hero = (hero: DocumentationIndexYaml["content"]["hero"]): JSX.Element => {
  const { forms } = useLayoutContext()
  const { title, description } = hero

  return (
    <Block backgroundColor="white" title={title}>
      <BlockContent>
        <div>{text(description.paragraph_1)}</div>

        {description.paragraph_2 && (
          <div>
            <BlockContentButton onClick={forms.contact.toggle}>{description.paragraph_2.button}</BlockContentButton>
            {text(description.paragraph_2.text)}
          </div>
        )}
      </BlockContent>
    </Block>
  )
}

export default Hero
