import * as React from "react"

import { IThumb } from "../index"

import { Link, Title, StyledThumbList, Thumb, Description, Content, StyledIcon } from "./Styles"

import { generateKey } from "@utils/misc"
import { IconCode } from "@layouts/shared/components/Icon"
import { iconSizes } from "@utils/styles"

export interface ThumbListProps {
  thumbs: Array<IThumb>
}

const ThumbList = ({ thumbs }: ThumbListProps): JSX.Element => {
  return (
    <StyledThumbList>
      {thumbs.map(({ title, description, to, icon }, index) => (
        <Thumb key={generateKey(title, index)}>
          <Link to={to} addLocalePrefix={false}>
            <StyledIcon code={icon as IconCode} size={iconSizes._64} />
            <Content>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Content>
          </Link>
        </Thumb>
      ))}
    </StyledThumbList>
  )
}

export default ThumbList
