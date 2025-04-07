import { Text, StyledCopyright, Container } from "./Styles"

type TCopyright = {
  copyright: {
    terms_link: {
      title: string
      link: string
    }
  }
}

const Copyright = ({ copyright }: TCopyright): JSX.Element => {
  const year = new Date(Date.now()).getFullYear()

  return (
    <StyledCopyright>
      <Container>
        <Text>&copy; {year} HubRise</Text>
        <Text>
          <a href={copyright.terms_link.link}>{copyright.terms_link.title}</a>
        </Text>
      </Container>
    </StyledCopyright>
  )
}

export default Copyright
