import styled from "styled-components"

import { StyledUnderline } from "@components/Underline/Styles"
import { colors, mixin } from "@utils/styles"

export const Content = styled.div``

export const ContentWrapper = styled.div`
  ${mixin.containerWrapper}
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  ${StyledUnderline} {
    margin-bottom: 0.25rem;
  }

  ${Content} {
    & > p {
      ${mixin.description}
    }

    a {
      ${mixin.link}
    }

    h4 {
      ${mixin.smallCardTitle}
      margin-top: 1rem;
    }

    blockquote {
      border-left: 0.1875rem solid ${colors.borderLight};
      margin-left: 0;
      padding-left: 2rem;

      p:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`

export const CardTitle = styled.h2`
  ${mixin.cardTitle}
`
