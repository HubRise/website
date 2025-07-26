import ScreenContainer from "@components/ScreenContainer"

import { Content, ContentBlock, TwoSidesContentWrapper } from "./Styles"

export type TTwoSidesContent = {
  firstSide: string
  secondSide: string
}

interface TwoSidesContentProps {
  content: TTwoSidesContent
}

const TwoSidesContent = ({ content }: TwoSidesContentProps): JSX.Element => {
  return (
    <ScreenContainer bgColor="green" verticalPadding="small">
      <TwoSidesContentWrapper>
        <Content>
          <ContentBlock>{content.firstSide}</ContentBlock>
          <ContentBlock>{content.secondSide}</ContentBlock>
        </Content>
      </TwoSidesContentWrapper>
    </ScreenContainer>
  )
}

export default TwoSidesContent
