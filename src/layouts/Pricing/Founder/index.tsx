import Image from "next/image"

import ScreenContainer from "@components/ScreenContainer"
import { ContentImageMap } from "@utils/contentImage"

import { Content, ImageWrapper, JobTitle, Name, Text, Wrapper, InnerWrapper } from "./Styles"

interface FounderProps {
  image: string
  name: string
  job_title: string
  text: string
  founderImageMap: ContentImageMap
}

const Founder = ({ image, name, job_title, text, founderImageMap }: FounderProps): JSX.Element => {
  return (
    <ScreenContainer bgColor="green" verticalPadding="small">
      <Wrapper>
        <InnerWrapper>
          <ImageWrapper {...founderImageMap[image]} alt={name} />
          <Content>
            <Image src="/images/quote-white.svg" alt="Quote" width={52} height={36} />
            <Name>- {name}</Name>
            <JobTitle>{job_title}</JobTitle>
            <Text>{text}</Text>
          </Content>
        </InnerWrapper>
      </Wrapper>
    </ScreenContainer>
  )
}

export default Founder
