import Card from "@components/Card"
import { IconCode } from "@components/Icon"
import ScreenContainer from "@components/ScreenContainer"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"
import { text } from "@utils/misc"
import { iconSizes } from "@utils/styles"

import { Link, Title, StyledThumbList, Description, Content, StyledIcon, IconWrapper } from "./Styles"

const ThumbList = ({ thumbs }: { thumbs: DocumentationIndexYaml["content"]["thumbs"] }): JSX.Element => {
  return (
    <ScreenContainer bgColor="backgroundLight" verticalPadding="big">
      <StyledThumbList>
        {thumbs.map(({ title, description, to, icon }, index) => (
          <Card key={index}>
            <Link href={to}>
              <IconWrapper>
                <StyledIcon code={icon as IconCode} size={iconSizes._32} />
              </IconWrapper>
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
