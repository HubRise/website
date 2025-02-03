import styled from "styled-components"

import { Content } from "@components/Block/Styles"
import { colors, fontSizes, breakpoints } from "@utils/styles"

export const Title = styled.h2`
  font-size: ${fontSizes._42};
  line-height: 3.75rem;
  font-weight: 600;
  color: ${colors.textDarkest};
  text-align: center;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._32};
    line-height: 2.5rem;
  }
`

export const Description = styled.div`
  max-width: 82rem;
  margin: 1.375rem auto 0;
  position: relative;
  padding-bottom: 1.25rem;

  p {
    font-size: ${fontSizes._24};
    line-height: 2rem;
    text-align: center;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -0.1875rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 7.5rem;
    height: 0.1875rem;
    border-radius: 6.25rem;
    background-color: ${colors.green};
  }

  @media (max-width: ${breakpoints.biggest}) {
    max-width: 67rem;

    p {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }

    &::after {
      width: 5rem;
    }
  }
`

export const Blocks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.875rem;
  max-width: 120rem;
  margin: 4rem auto 0;
  padding: 0 7rem;

  & > div {
    margin: 0;
    display: flex;
  }

  ${Content} {
    border-radius: 0.875rem;
    box-shadow:
      -5.1394px 48.8243px 19.2727px rgba(181, 181, 181, 0.01),
      -2.5697px 26.9818px 16.703px rgba(181, 181, 181, 0.05),
      -1.28485px 11.5636px 11.5636px rgba(181, 181, 181, 0.09),
      0px 2.5697px 6.42424px rgba(181, 181, 181, 0.1);

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (max-width: ${breakpoints.biggest}) {
    max-width: 90rem;
    padding: 0 3.75rem;
  }
`

export const BlockTitle = styled.h4`
  font-size: ${fontSizes._24};
  font-weight: 600;
  line-height: 2rem;
  color: ${colors.textDarkest};
  margin-top: 1.875rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
    margin-top: 1.375rem;
  }
`

export const BlockText = styled.p`
  font-size: ${fontSizes._20};
  line-height: 1.875rem;
  margin-top: 0.625rem;
  color: ${colors.textDark};

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._16};
    line-height: 1.5rem;
  }
`
