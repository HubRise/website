import styled from "styled-components"

import { colors, mixin } from "@utils/styles"
import OriginalLink from "@layouts/shared/components/Link"

export const Styled404 = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
`

const verticalGap = "0.8rem"

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 1rem;
    margin: ${verticalGap} auto 0;
    background-color: ${colors.silverGray};
  }
`

export const Link = styled(OriginalLink)`
  margin-top: ${verticalGap};

  ${mixin.linkOver(colors.darkGray)};

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 8rem;
    margin: ${verticalGap} auto 0;
    background-color: ${colors.primary};
  }
`

export const Image = styled.img`
  margin: 2rem 0;
`
