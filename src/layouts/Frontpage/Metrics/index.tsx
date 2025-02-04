import Container from "@components/Container"

import { TMetric } from "../types"

import { MetricBlock, Number, Text, Wrapper } from "./Styles"

interface MetricsProps {
  metrics: Array<TMetric>
}

const Metrics = ({ metrics }: MetricsProps): JSX.Element => (
  <Container bgColor="green" verticalPadding="small">
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
  </Container>
)

export default Metrics
