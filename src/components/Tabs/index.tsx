import React from "react"

import { StyledTabs, Menu, MenuItem, Wrapper } from "./Styles"

export interface TTabItem {
  label: string
}

interface TabsProps {
  items: Array<TTabItem>
  onChange: (index: number) => void
  activeIndex: number
  children: React.ReactNode
}

const Tabs = ({ items, onChange, activeIndex, children }: TabsProps): JSX.Element => {
  return (
    <Wrapper>
      <StyledTabs>
        <Menu>
          {items.map(({ label }, index) => {
            return (
              <MenuItem key={index} $isSelected={index === activeIndex} onClick={() => onChange(index)}>
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
