import * as React from "react"

import { Header, Item, ItemLink } from "./Styles"

import { generateKey } from "@utils/misc"
import { IFooter } from "@layouts/shared/components/Footer/interface"

const FooterSection = ({ title, links }: IFooter["sections"][number]): JSX.Element => (
  <div>
    <Header>{title}</Header>

    <ul>
      {links.map(({ title, to }, idx) => (
        <Item key={generateKey(title, idx)}>
          <ItemLink to={to} addLocalePrefix={false}>
            {title}
          </ItemLink>
        </Item>
      ))}
    </ul>
  </div>
)

export default FooterSection
