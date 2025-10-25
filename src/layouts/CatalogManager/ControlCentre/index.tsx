import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { useState } from "react"

import ScreenContainer from "@components/ScreenContainer"
import Tabs from "@components/Tabs"
import { Tab, TabText, TabTitle } from "@components/Tabs/commonStyles"

import { TApp } from "../types"

interface ControlCentreProps {
  app: TApp
  descriptionMdx: MDXRemoteSerializeResult
}

const ControlCentre = ({ app, descriptionMdx }: ControlCentreProps): JSX.Element => {
  const { tabs } = app
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index)
  }

  return (
    <ScreenContainer title={app.title} descriptionMdx={descriptionMdx} withHeader>
      <Tabs items={tabs} activeIndex={activeTabIndex} onChange={handleTabChange}>
        <Tab>
          <TabTitle>{tabs[activeTabIndex].content.title}</TabTitle>
          <TabText>{tabs[activeTabIndex].content.description}</TabText>
          <Image
            src={`/images/${tabs[activeTabIndex].content.image}`}
            alt={tabs[activeTabIndex].content.title}
            width={1045}
            height={880}
          />
        </Tab>
      </Tabs>
    </ScreenContainer>
  )
}

export default ControlCentre
