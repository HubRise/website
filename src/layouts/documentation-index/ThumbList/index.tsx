import * as React from "react"

import { IThumb } from "../index"

import { Icon, Link, Title, StyledThumbList, Thumb, Description } from "./Styles"

import { generateKey } from "@utils/misc"

export interface ThumbListProps {
  thumbs: Array<IThumb>
}

const ThumbList = ({ thumbs }: ThumbListProps): JSX.Element => {
  return (
    <StyledThumbList>
      {thumbs.map(({ title, description, to, icon }, index) => (
        <Thumb key={generateKey(title, index)}>
          <Link to={to} addLocalePrefix={false}>
            <Icon className={`fa ${icon}`} />
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Link>
        </Thumb>
      ))}
    </StyledThumbList>
  )
}

export default ThumbList
