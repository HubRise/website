import Button from "@components/Button"

import { TResources } from "../shared/types"

import {
  ResourcesContainer,
  ResourcesLinks,
  ResourcesLink,
  LinkName,
  LinkDescription,
  GetInTouchCard,
  GetInTouchText,
  GetInTouchMainQuestion,
  GetInTouchQuestion,
} from "./Styles"

interface ResourcesProps {
  resources: TResources
}

const Resources = ({ resources }: ResourcesProps) => {
  return (
    <ResourcesContainer>
      <ResourcesLinks>
        {resources.links?.map(({ link, link_label, link_description }, index) => {
          return (
            <ResourcesLink href={link} key={index}>
              <LinkName>{link_label}</LinkName>
              <LinkDescription>{link_description}</LinkDescription>
            </ResourcesLink>
          )
        })}
      </ResourcesLinks>
      <GetInTouchCard>
        <GetInTouchText>
          <GetInTouchMainQuestion>{resources.get_in_touch.main_question}</GetInTouchMainQuestion>
          <GetInTouchQuestion>{resources.get_in_touch.question}</GetInTouchQuestion>
        </GetInTouchText>
        <Button
          type="secondary"
          label={resources.get_in_touch.button_label}
          link={resources.get_in_touch.button_link}
        />
      </GetInTouchCard>
    </ResourcesContainer>
  )
}

export default Resources
