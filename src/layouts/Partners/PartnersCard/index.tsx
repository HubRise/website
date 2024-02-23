import { Partners } from "@layouts/Partners/types"

import {
  Description,
  Descriptions,
  ImageWrapper,
  InfoHeader,
  InfoWrapper,
  Name,
  PartnerImage,
  Website,
  Wrapper,
} from "./Styles"

interface PartnersCardProps {
  partner: Partners
}

const PartnersCard: React.FC<PartnersCardProps> = ({ partner }) => {
  const { descriptions, name, image_name, site_url } = partner

  return (
    <Wrapper>
      <ImageWrapper>
        <PartnerImage src={`/images/partners/${image_name}`} alt={`${name} logo`} fill={true} />
      </ImageWrapper>
      <InfoWrapper>
        <InfoHeader>
          <Name>{name}</Name>
          <Website href={site_url} target="_blank">
            {site_url}
          </Website>
        </InfoHeader>
        <Descriptions>
          {descriptions.map((description, index) => (
            <Description key={index}>{description}</Description>
          ))}
        </Descriptions>
      </InfoWrapper>
    </Wrapper>
  )
}
export default PartnersCard
