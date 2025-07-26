import ScreenContainer from "@components/ScreenContainer"

import { MetricBlock, Number, Text, Wrapper } from "./Styles"

export type TMetric = {
  number: string
  title: string
}

interface MetricsProps {
  metrics: Array<TMetric>
}

const Metrics = ({ metrics }: MetricsProps): JSX.Element => (
  <ScreenContainer bgColor="green" verticalPadding="small">
    <Wrapper>
      {metrics.map(({ number, title }, index) => {
        return (
          <MetricBlock key={index}>
            <Number>{number}</Number>
            <Text>{title}</Text>
          </MetricBlock>
        )
      })}
    </Wrapper>
  </ScreenContainer>
)

export default Metrics
