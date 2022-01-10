import styled from "styled-components"

import Link from "@layouts/shared/components/Link"
import { breakpoints, colors, mixin } from "@utils/styles"

export const StyledPost = styled.div`
  & + & {
    margin-top: 3rem;
  }
`

export const Title = styled.h3`
  color: ${colors.darkGray};
  font-weight: bold;
  position: relative;
  margin-bottom: 2.5rem;
  width: 100%;
  text-align: left;
  font-size: 2.125rem;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: inherit;
    top: 100%;
    margin: 5px auto;
    width: 15%;
    height: 3px;
    background: ${colors.primary};
  }
`

export const Header = styled.div`
  color: ${colors.lightGray};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1rem;
`

export const DateValue = styled.span`
  color: ${colors.gray};
`

export const Excerpt = styled.div`
  color: ${colors.gray};
  line-height: 1.6;
  margin-bottom: 1rem;
`

export const ReadMore = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0.3rem 1.8rem;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${colors.white};
  background: ${colors.gray};
  border-radius: 3px;

  ${mixin.buttonOver(colors.white, colors.primary)};

  @media (min-width: ${breakpoints.medium}) {
    width: auto;
  }
`
