import React from "react"

import { StyledTabs, Menu, MenuItem, Wrapper } from "./Styles"

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
    <Wrapper>
      <StyledTabs>
        <Menu>
          {items.map(({ label, key }, Idx) => {
            return (
              <MenuItem key={Idx} $isSelected={key === activeKey} onClick={() => onChange(Idx)}>
                {label}
              </MenuItem>
            )
          })}
        </Menu>

        {children}
      </StyledTabs>
    </Wrapper>
  )
}

export default Tabs
