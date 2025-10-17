import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import Icon from "@components/Icon"
import ScreenContainer from "@components/ScreenContainer"
import { SideBlock } from "@components/SideBlock"
import Underline from "@components/Underline"
import { iconSizes } from "@utils/styles"

import { TIncludedApp } from "../types"

import { SideBlocks, ContentWrapper, Title, Advantage, Advantages, IconWrapper, AdvantageText } from "./Styles"

interface IncludedAppsProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
  apps: Array<TIncludedApp>
}

const IncludedApps = ({ title, descriptionMdx, apps }: IncludedAppsProps) => {
  return (
    <ScreenContainer withHeader title={title} descriptionMdx={descriptionMdx}>
      <SideBlocks>
        {apps.map((integrationApp, index) => {
          return (
            <SideBlock
              key={index}
              side={index % 2 ? "left" : "right"}
              secondaryContent={
                <Image
                  src={`/images/frontpage/${integrationApp.image}`}
                  alt={integrationApp.title}
                  width={1040}
                  height={820}
                />
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

export default IncludedApps
