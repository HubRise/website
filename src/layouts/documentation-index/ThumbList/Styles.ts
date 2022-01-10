import styled from "styled-components"

import OriginalLink from "@layouts/shared/components/Link"
import { breakpoints, colors } from "@utils/styles"

export const StyledThumbList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 1rem;
`

export const Thumb = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 1rem;
  padding: 0 0.9375rem;
  text-align: left;

  @media (max-width: ${breakpoints.large}) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 0.625rem;
  }
`

export const Link = styled(OriginalLink)`
  display: block;
  width: 100%;
  height: 100%;
`

export const Icon = styled.i`
  float: left;
  font-size: 3.25rem;
  color: ${colors.primary};
  line-height: 4.2rem;
  height: 160px;
  margin-right: 2rem;
`

export const Title = styled.span`
  font-size: 1.5rem;
  color: ${colors.darkGray};
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${colors.lightGray};
  font-weight: 400;
`
