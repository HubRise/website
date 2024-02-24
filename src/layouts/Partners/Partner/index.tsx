import { Partners } from "@layouts/Partners/types"

import { Description, Logo, Title, Information, Name, PartnerImage, Website, Card } from "./Styles"

interface PartnerProps {
  partner: Partners
}

const Partner = ({ partner }: PartnerProps): JSX.Element => {
  const { descriptions, name, filename, site_url } = partner

  return (
    <Card>
      <Logo>
        <PartnerImage src={`/images/partners/${filename}`} alt={`${name} logo`} fill={true} />
      </Logo>

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
