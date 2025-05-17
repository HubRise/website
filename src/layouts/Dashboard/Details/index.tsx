import ScreenContainer from "@components/ScreenContainer"

import { DetailsContainer } from "./Styles"

interface DetailsProps {
  title: string
}

const Details = ({ title }: DetailsProps): JSX.Element => {
  return (
    <ScreenContainer title={title} withHeader bgColor="white">
      <DetailsContainer>Animation</DetailsContainer>
    </ScreenContainer>
  )
}

export default Details
