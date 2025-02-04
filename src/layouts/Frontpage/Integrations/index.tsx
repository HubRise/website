import Image from "next/image"

import Block from "@components/Block"
import Button from "@components/Button"
import Container from "@components/Container"
import ContainerHeader from "@components/ContainerHeader"
import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { TIntegrationApp } from "../types"

import { Advantage, Advantages, IconWrapper } from "./Styles"

interface IntegrationsProps {
  title: string
  integration_apps: Array<TIntegrationApp>
}

const Integrations = ({ title, integration_apps }: IntegrationsProps) => {
  return (
    <Container bgColor="backgroundLight" verticalPadding="big">
      <ContainerHeader title={title} />
      {integration_apps.map((integrationApp, index) => {
        return (
          <Block
            key={index}
            backgroundColor="white"
            padding="small"
            title={integrationApp.title}
            beforeExpansion={!integrationApp.afterExpansion}
            afterExpansion={integrationApp.afterExpansion}
            horizontalAlign="centerOnMobile"
            desktopVerticalAlign="center"
            side={
              <Image src={`/images/frontpage/${integrationApp.image}`} alt="Documentation" width={915} height={750} />
            }
            sidePosition={integrationApp.sidePosition}
          >
            <Advantages>
              {integrationApp.advantages.map(({ text }, key) => {
                return (
                  <Advantage key={key}>
                    <IconWrapper>
                      <Icon code="check" size={iconSizes._25} color="white" />
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
          </Block>
        )
      })}
    </Container>
  )
}

export default Integrations
