import { IconCode } from "@components/Icon"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"
import { generateKey } from "@utils/misc"
import { iconSizes } from "@utils/styles"

import { Link, Title, StyledThumbList, Thumb, Description, Content, StyledIcon } from "./Styles"

const ThumbList = ({ thumbs }: { thumbs: DocumentationIndexYaml["content"]["thumbs"] }): JSX.Element => {
  return (
    <StyledThumbList>
      {thumbs.map(({ title, description, to, icon }, index) => (
        <Thumb key={generateKey(title, index)}>
          <Link href={to}>
            <StyledIcon code={icon as IconCode} size={iconSizes._64} />
            <Content>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Content>
          </Link>
        </Thumb>
      ))}
    </StyledThumbList>
  )
}

export default ThumbList
