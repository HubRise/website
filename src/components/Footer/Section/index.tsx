import { LinkedInSVG } from "../svg"
import type { IFooter } from "../types"

import { Header, Item, ItemLink, List } from "./Styles"

const FooterSection = ({ title, links }: IFooter["sections"][number]): JSX.Element => (
  <div>
    <Header>{title}</Header>

    <List>
      {links.map(({ title, to, icon }, idx) => (
        <Item key={idx}>
          <ItemLink href={to}>
            {icon && icon === "linkedin" && <LinkedInSVG />}
            {title}
          </ItemLink>
        </Item>
      ))}
    </List>
  </div>
)

export default FooterSection
