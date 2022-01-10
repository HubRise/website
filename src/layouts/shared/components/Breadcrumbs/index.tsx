import * as React from "react"

import { Breadcrumb } from "./interface"
import { Item, ItemLink, List, Wrapper } from "./Styles"

interface BreadcrumbsProps {
  breadcrumbs: Array<Breadcrumb>
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps): JSX.Element => {
  return (
    <Wrapper>
      <List>
        {breadcrumbs.map((breadcrumb, index) => (
          <Item key={index}>
            {breadcrumb.path ? (
              <ItemLink to={breadcrumb.path} addLocalePrefix={false}>
                {breadcrumb.label}
              </ItemLink>
            ) : (
              breadcrumb.label
            )}
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default Breadcrumbs

export type { Breadcrumb } from "./interface"
