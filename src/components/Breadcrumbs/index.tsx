import * as React from "react"

import { DocLink } from "@utils/DocIndexer/types"

import { Item, ItemLink, StyledBreadcrumbs } from "./Styles"

interface BreadcrumbsProps {
  breadcrumbs: Array<DocLink>
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps): JSX.Element => {
  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map((breadcrumb, index) => (
        <Item key={index}>
          {index < breadcrumbs.length - 1 ? (
            <ItemLink href={breadcrumb.uri}>{breadcrumb.label}</ItemLink>
          ) : (
            breadcrumb.label
          )}
        </Item>
      ))}
    </StyledBreadcrumbs>
  )
}

export default Breadcrumbs
