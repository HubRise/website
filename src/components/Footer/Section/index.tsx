import { LinkedInSVG } from "../svg"
import type { IFooter } from "../types"

import { ExternalLink, Header, HeaderUnderline, Item, ItemLink, List } from "./Styles"

const FooterSection = ({ title, links }: IFooter["sections"][number]): JSX.Element => (
  <div>
    <Header>{title}</Header>
    <HeaderUnderline />
    <List>
      {links.map(({ title, to, icon, is_external }, idx) => {
        if (is_external) {
          return (
            <Item key={idx}>
              <ExternalLink href={to} target="_blank">
                {icon && icon === "linkedin" && <LinkedInSVG />}
                {title}
              </ExternalLink>
            </Item>
          )
        } else {
          return (
            <Item key={idx}>
              <ItemLink href={to}>
                {icon && icon === "linkedin" && <LinkedInSVG />}
                {title}
              </ItemLink>
            </Item>
          )
        }
      })}
    </List>
  </div>
)

export default FooterSection
