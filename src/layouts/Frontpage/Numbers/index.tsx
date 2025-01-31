import { Container, NumberBlock, Number, Text } from "./Styles"

interface NumbersProps {
  numbers: Array<{
    number: string
    title: string
  }>
}

const Numbers = ({ numbers }: NumbersProps): JSX.Element => (
  <Container>
    {numbers.map(({ number, title }, index) => {
      return (
        <NumberBlock key={index}>
          <Number>{number}</Number>
          <Text>{title}</Text>
        </NumberBlock>
      )
    })}
  </Container>
)

export default Numbers
