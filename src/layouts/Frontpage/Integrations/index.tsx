import Container from "@components/Container"

interface UseProps {
  title: string
}

const Integrations = ({ title = "test" }: UseProps): JSX.Element => {
  return (
    <Container bgColor="backgroundLight" verticalPadding="big">
      {title}
    </Container>
  )
}

export default Integrations
