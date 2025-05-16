import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { useState } from "react"

import ScreenContainer from "@components/ScreenContainer"
import Tabs from "@components/Tabs"

import { Wrapper } from "../shared/Styles"
import { TApp } from "../types"

import { Tab, TabText, TabTitle } from "./Styles"

interface CatalogManagerAppProps {
  app: TApp
  descriptionMdx: MDXRemoteSerializeResult
}

const CatalogManagerApp = ({ app, descriptionMdx }: CatalogManagerAppProps): JSX.Element => {
  const { tabs } = app
  const [activeTabNumber, setActiveTabNumber] = useState<number>(0)

  const handleTabChange = (key: number) => {
    setActiveTabNumber(key)
  }

  return (
    <ScreenContainer title={app.title} descriptionMdx={descriptionMdx} withHeader>
      <Wrapper>
        <Tabs items={tabs} activeKey={activeTabNumber} onChange={handleTabChange}>
          <Tab>
            <TabTitle>{tabs[activeTabNumber].content.title}</TabTitle>
            <TabText>{tabs[activeTabNumber].content.description}</TabText>
            <Image
              src={`/images/${tabs[activeTabNumber].content.image}`}
              alt={tabs[activeTabNumber].content.title}
              width={1045}
              height={880}
            />
          </Tab>
        </Tabs>
      </Wrapper>
    </ScreenContainer>
  )
}

export default CatalogManagerApp
