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
  const [activeTabNumber, setActiveTabNumber] = useState<number>(0)

  const handleTabChange = (key: number) => {
    setActiveTabNumber(key)
  }

  return (
    <ScreenContainer title={apps.title} descriptionMdx={descriptionMdx} withHeader>
      <Tabs items={tabs} activeKey={activeTabNumber} onChange={handleTabChange}>
        <Tab>
          <TabTitle>{tabs[activeTabNumber].content.title}</TabTitle>
          <TabText>{tabs[activeTabNumber].content.description}</TabText>
          <Image
            src={`/images/${tabs[activeTabNumber].content.image}`}
            alt={tabs[activeTabNumber].content.title}
            width={1100}
            height={800}
          />
        </Tab>
      </Tabs>
    </ScreenContainer>
  )
}

export default Apps
