import styled from "styled-components"

import { boxShadows, breakpoints, colors, lineHeights, mixin } from "@utils/styles"

export const Card = styled.div`
  max-width: 60rem;
  margin: 7.5rem auto 0;
  padding: 135px 3.5rem 55px;
  position: relative;
  background-color: ${colors.backgroundWhite};
  box-shadow: ${boxShadows.card};
  border-radius: 0.5rem;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    padding-left: 7.5rem;
    padding-right: 7.5rem;
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
  font-size: ${mixin.responsiveText};
  color: ${colors.textDark};

  &::before,
  &::after {
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
  font-size: ${mixin.responsiveText};
  font-weight: 600;
  line-height: ${lineHeights.compact};
  letter-spacing: 0.04em;
`

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${colors.borderMedium};
  border-radius: 100%;
`
