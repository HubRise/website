import Image from "next/image"
import Link from "next/link"

import { StyledCopyright, Container, Text, Links } from "./Styles"

type TCopyright = {
  copyrightLinks: Array<{
    title: string
    link: string
  }>
}

const Copyright = ({ copyrightLinks }: TCopyright): JSX.Element => {
  const year = new Date(Date.now()).getFullYear()

  return (
    <StyledCopyright>
      <Container>
        <Text>&copy; {year} HubRise. All rights reserved.</Text>
        <Image src="/images/logo_footer.png" alt="HubRise" width={123} height={32} />
        <Links>
          {copyrightLinks.map(({ title, link }, index) => {
            return (
              <Link key={index} href={link}>
                {title}
              </Link>
            )
          })}
        </Links>
      </Container>
    </StyledCopyright>
  )
}

export default Copyright
