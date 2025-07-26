import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { colors, mixin } from "@utils/styles"

export const BannerImage = styled.div`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${colors.textLighter};
  overflow: hidden;
  display: flex;
  margin-bottom: 0.625rem;
`

export const CardTitle = styled.h4`
  ${mixin.smallCardTitle}
`

export const CardText = styled.p`
  ${mixin.cardText}
  font-weight: 600;
`

export const ReadMoreWrapper = styled.div`
  margin-top: auto;

  ${StyledButton} {
    width: 100%;
    margin-top: 0.75rem;
  }
`
