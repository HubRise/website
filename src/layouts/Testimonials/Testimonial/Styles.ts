import styled from "styled-components"

import { boxShadows, breakpoints, colors, fontSizes, lineHeights, sizes } from "@utils/styles"

export const Card = styled.div`
  position: relative;
  max-width: ${sizes.maxWidth};
  margin: 8.75rem auto;
  padding: 135px 1.25rem 55px;
  background-color: ${colors.white};
  box-shadow: ${boxShadows.card};

  @media (min-width: ${breakpoints.large}) {
    padding-left: 7.85rem;
    padding-right: 7.85rem;
    margin-top: 9.75rem;
    margin-bottom: 9.75rem;
    border-radius: 0.5rem;
  }

  &:last-child {
    margin-bottom: 5rem;
  }
`

export const Picture = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  img {
    border-radius: 100%;
    border: 0.75rem solid ${colors.backgroundLight};
    width: 14rem;
  }
`

export const Quote = styled.div`
  font-style: italic;
  font-size: ${fontSizes._16};
  text-align: center;
  color: ${colors.textDark};

  &:before,
  &:after {
    content: "“";
    font-weight: 700;
  }
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-top: 1rem;
`

export const Detail = styled.span`
  font-size: ${fontSizes._16};
  font-weight: 600;
  line-height: ${lineHeights.compact};
  letter-spacing: 0.04em;
  white-space: nowrap;
`

export const Bullet = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${colors.borderMedium};
  border-radius: 100%;
`
