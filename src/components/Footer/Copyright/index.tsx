import { Company, StyledCopyright, Logo, SocialLink, Contact, EmailLink, Container } from "./Styles"
import { LinkedInSVG, TwitterSVG } from "./svg"

const Copyright = (): JSX.Element => {
  const year = new Date(Date.now()).getFullYear()

  return (
    <StyledCopyright>
      <Container>
        <Company>&copy; {year} HubRise</Company>

        <Logo src="/images/logo_footer.png" alt="HubRise" width={200} height={52} />

        <Contact>
          <EmailLink href="mailto:contact@hubrise.com" target="_blank" rel="noopener noreferrer">
            contact@hubrise.com
          </EmailLink>

          <SocialLink href="https://www.linkedin.com/company/hubrise" target="_blank" rel="noopener noreferrer">
            <LinkedInSVG />
          </SocialLink>

          <SocialLink href="https://twitter.com/HubRiseHQ" target="_blank" rel="noopener noreferrer">
            <TwitterSVG />
          </SocialLink>
        </Contact>
      </Container>
    </StyledCopyright>
  )
}

export default Copyright
