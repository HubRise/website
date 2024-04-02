import { Partners } from "@layouts/Partners/types"
import { ContentImage } from "@utils/contentImage"

import { Description, Logo, Title, Information, Name, PartnerImage, Website, Card } from "./Styles"

interface PartnerProps {
  partner: Partners
  image?: ContentImage
}

const Partner = ({ partner, image }: PartnerProps): JSX.Element => {
  const { descriptions, name, site_url } = partner

  return (
    <Card>
      <Logo>{image && <PartnerImage {...image} alt={`${name} logo`} />}</Logo>

      <Information>
        <Title>
          <Name>{name}</Name>
          <Website href={site_url} target="_blank">
            {site_url}
          </Website>
        </Title>

        {descriptions.map((description, index) => (
          <Description key={index}>{description}</Description>
        ))}
      </Information>
    </Card>
  )
}
export default Partner
