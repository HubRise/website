import React from "react"

import { StyledTabs, TabItems, Tab } from "./Styles"

export interface TTabItem {
  label: string
  key: number
}

interface TabsProps {
  items: Array<TTabItem>
  onChange: (key: number) => void
  activeKey: number
  children: React.ReactNode
}

const Tabs = ({ items, onChange, activeKey, children }: TabsProps): JSX.Element => {
  return (
    <StyledTabs>
      <TabItems>
        {items.map(({ label, key }, Idx) => {
          return (
            <Tab key={Idx} $isSelected={key === activeKey} onClick={() => onChange(Idx)}>
              {label}
            </Tab>
          )
        })}
      </TabItems>
      {children}
    </StyledTabs>
  )
}

export default Tabs
