import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { useState } from "react"

import ScreenContainer from "@components/ScreenContainer"
import Tabs from "@components/Tabs"
import { Tab, TabText, TabTitle } from "@components/Tabs/commonStyles"

import { TApps } from "../types"

interface AppsProps {
  apps: TApps
  descriptionMdx: MDXRemoteSerializeResult
}

const Apps = ({ apps, descriptionMdx }: AppsProps): JSX.Element => {
  const { tabs } = apps
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index)
  }

  return (
    <ScreenContainer title={apps.title} descriptionMdx={descriptionMdx} withHeader>
      <Tabs items={tabs} activeIndex={activeTabIndex} onChange={handleTabChange}>
        <Tab>
          <TabTitle>{tabs[activeTabIndex].content.title}</TabTitle>
          <TabText>{tabs[activeTabIndex].content.description}</TabText>
          <Image
            src={`/images/${tabs[activeTabIndex].content.image}`}
            alt={tabs[activeTabIndex].content.title}
            width={1100}
            height={800}
          />
        </Tab>
      </Tabs>
    </ScreenContainer>
  )
}

export default Apps
