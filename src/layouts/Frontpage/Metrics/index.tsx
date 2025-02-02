import { TMetric } from "../types"

import { Container, MetricBlock, Number, Text } from "./Styles"

interface MetricsProps {
  metrics: Array<TMetric>
}

const Metrics = ({ metrics }: MetricsProps): JSX.Element => (
  <Container>
    {metrics.map(({ number, title }, index) => {
      return (
        <MetricBlock key={index}>
          <Number>{number}</Number>
          <Text>{title}</Text>
        </MetricBlock>
      )
    })}
  </Container>
)

export default Metrics
