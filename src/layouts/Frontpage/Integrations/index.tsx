import Image from "next/image"

import Button from "@components/Button"
import Icon from "@components/Icon"
import ScreenContainer from "@components/ScreenContainer"
import { SideBlock } from "@components/SideBlock"
import Underline from "@components/Underline"
import { iconSizes } from "@utils/styles"

import { TIntegrationApp } from "../types"

import { SideBlocks, ContentWrapper, Title, Advantage, Advantages, IconWrapper, AdvantageText } from "./Styles"

interface IntegrationsProps {
  title: string
  integration_apps: Array<TIntegrationApp>
}

const Integrations = ({ title, integration_apps }: IntegrationsProps) => {
  return (
    <ScreenContainer bgColor="backgroundLight" verticalPadding="big" withHeader title={title}>
      <SideBlocks>
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
                <Underline />
                <Advantages>
                  {integrationApp.advantages.map(({ text }, key) => {
                    return (
                      <Advantage key={key}>
                        <IconWrapper>
                          <Icon code="check" size={iconSizes._20} color="white" />
                        </IconWrapper>
                        <AdvantageText>{text}</AdvantageText>
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
      </SideBlocks>
    </ScreenContainer>
  )
}

export default Integrations
