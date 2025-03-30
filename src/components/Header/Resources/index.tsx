import { TResources } from "../shared/types"

import { ResourcesContainer, ResourcesTitle, ResourcesDescription, ResourcesLinks, ResourcesLink } from "./Styles"

interface ResourcesProps {
  resources: TResources
}

const Resources = ({ resources }: ResourcesProps) => {
  return (
    <ResourcesContainer>
      <ResourcesTitle>{resources.title}</ResourcesTitle>
      <ResourcesDescription>{resources.description}</ResourcesDescription>
      <ResourcesLinks>
        {resources.links?.map(({ link, link_label }, index) => {
          return (
            <ResourcesLink href={link} key={index}>
              {link_label}
            </ResourcesLink>
          )
        })}
      </ResourcesLinks>
    </ResourcesContainer>
  )
}

export default Resources
