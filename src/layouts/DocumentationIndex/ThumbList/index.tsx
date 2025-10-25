import Image from "next/image"

import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"
import { ContentImageMap } from "@utils/contentImage"
import { text } from "@utils/misc"

import { Link, Title, StyledThumbList, Description, Content } from "./Styles"

interface ThumbListProps {
  thumbs: DocumentationIndexYaml["content"]["thumbs"]
  thumbIconsMap: ContentImageMap
}

const ThumbList = ({ thumbs, thumbIconsMap }: ThumbListProps): JSX.Element => {
  return (
    <ScreenContainer>
      <StyledThumbList>
        {thumbs.map(({ title, description, to, icon }, index) => (
          <Card key={index}>
            <Link href={to}>
              {thumbIconsMap[icon] && <Image {...thumbIconsMap[icon]} alt={title} width={80} height={80} />}
              <Content>
                <Title>{text(title)}</Title>
                <Description>{text(description)}</Description>
              </Content>
            </Link>
          </Card>
        ))}
      </StyledThumbList>
    </ScreenContainer>
  )
}

export default ThumbList
