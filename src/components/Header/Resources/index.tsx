import { TResources } from "../shared/types"

import { ResourcesTitle, ResourcesDescription, ResourcesLinks, ResourcesLink } from "./Styles"

interface ResourcesProps {
  resources: TResources
}

const Resources = ({ resources }: ResourcesProps) => {
  return (
    <>
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
    </>
  )
}

export default Resources
