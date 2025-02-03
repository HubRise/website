import GreenContainer from "@components/GreenContainer"

import { TMetric } from "../types"

import { MetricBlock, Number, Text, Wrapper } from "./Styles"

interface MetricsProps {
  metrics: Array<TMetric>
}

const Metrics = ({ metrics }: MetricsProps): JSX.Element => (
  <GreenContainer>
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
  </GreenContainer>
)

export default Metrics
