import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import SerializedMdxContent from "@components/SerializedMdxContent"
import { Partner } from "@layouts/Partners/types"
import { ContentImage } from "@utils/contentImage"
import { text } from "@utils/misc"

import { Description, Logo, Title, Information, Name, PartnerImage, Website, Card } from "./Styles"

interface PartnerProps {
  partner: Partner
  image?: ContentImage
  descriptionMdx?: MDXRemoteSerializeResult
}

const Partner = ({ partner, image, descriptionMdx }: PartnerProps): JSX.Element => {
  const { name, site_url } = partner

  return (
    <Card>
      <Logo>{image && <PartnerImage {...image} alt={`${name} logo`} />}</Logo>

      <Information>
        <Title>
          <Name>{text(name)}</Name>
          <Website href={site_url} target="_blank">
            {site_url}
          </Website>
        </Title>

        {descriptionMdx && (
          <Description>
            <SerializedMdxContent content={descriptionMdx} />
          </Description>
        )}
      </Information>
    </Card>
  )
}
export default Partner
