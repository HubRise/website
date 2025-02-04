import Container from "@components/Container"
import ContainerHeader from "@components/ContainerHeader"

interface IntegrationsProps {
  title: string
}

const Integrations = ({ title = "test" }: IntegrationsProps) => {
  return (
    <Container bgColor="backgroundLight" verticalPadding="big">
      <ContainerHeader title={title} />
    </Container>
  )
}

export default Integrations
