import * as React from "react"

import Icon from "@components/Icon"
import useTranslation from "@hooks/client/useTranslation"
import { DocLink } from "@utils/DocIndexer/types"

import { Item, ItemLink, StyledBreadcrumbs } from "./Styles"

interface BreadcrumbsProps {
  breadcrumbs: Array<DocLink>
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <StyledBreadcrumbs>
      <Item>
        <ItemLink href="/">
          <Icon code="home" />
        </ItemLink>
      </Item>
      {breadcrumbs.map((breadcrumb, index) => (
        <Item key={index}>
          {index < breadcrumbs.length - 1 || breadcrumb.label === t("blog.title") ? (
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
