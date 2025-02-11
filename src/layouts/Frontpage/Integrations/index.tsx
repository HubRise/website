import Image from "next/image"

import Button from "@components/Button"
import Container from "@components/Container"
import ContainerHeader from "@components/ContainerHeader"
import Icon from "@components/Icon"
import { SideBlock } from "@components/SideBlock"
import { iconSizes } from "@utils/styles"

import { TIntegrationApp } from "../types"

import { SideBlockWrapper, ContentWrapper, Title, Advantage, Advantages, IconWrapper } from "./Styles"

interface IntegrationsProps {
  title: string
  integration_apps: Array<TIntegrationApp>
}

const Integrations = ({ title, integration_apps }: IntegrationsProps) => {
  return (
    <Container bgColor="backgroundLight" verticalPadding="big">
      <ContainerHeader title={title} />
      <SideBlockWrapper>
        {integration_apps.map((integrationApp, index) => {
          return (
            <SideBlock
              key={index}
              side={index % 2 ? "left" : "right"}
              secondaryContent={
                <Image src={`/images/frontpage/${integrationApp.image}`} alt="Documentation" width={915} height={750} />
              }
              secondaryPosition={index % 2 ? "left" : "right"}
            >
              <ContentWrapper $padding={index % 2 ? "right" : "left"}>
                <Title>{integrationApp.title}</Title>
                <Advantages>
                  {integrationApp.advantages.map(({ text }, key) => {
                    return (
                      <Advantage key={key}>
                        <IconWrapper>
                          <Icon code="check" size={iconSizes._20} color="white" />
                        </IconWrapper>
                        <span>{text}</span>
                      </Advantage>
                    )
                  })}
                </Advantages>
                <Button
                  label={integrationApp.button_label}
                  link={integrationApp.button_link}
                  type="secondary"
                  icon={<Icon code="arrow_forward" size={iconSizes._25} />}
                />
              </ContentWrapper>
            </SideBlock>
          )
        })}
      </SideBlockWrapper>
    </Container>
  )
}

export default Integrations
