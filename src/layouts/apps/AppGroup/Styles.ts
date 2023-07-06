import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { boxShadows, breakpoints, colors, fontSizes, sizes } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const Group = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  margin-top: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    grid-gap: 2rem;
  }
`
export const AppLogo = styled(GatsbyImage)`
  height: 100px;
  width: 100%;
  padding: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    height: 153px;
  }
`

export const AppDocumentation = styled.div`
  padding: 1rem;
  color: ${colors.textDark};
  background-color: #ffffff;
  transition: background-color 0.2s ease;
`

export const AppDescription = styled.div`
  padding: 1rem;
  flex: 1;
  color: ${colors.textDark};
`

export const AppAdditionalInfo = styled.div`
  padding: 1rem;
  font-size: ${fontSizes._12};
  color: ${colors.textMedium};
  font-style: italic;

  &::before {
    display: block;
    content: "";
    width: 1.5rem;
    margin: 0 auto 1rem auto;
    height: 1px;
    background-color: ${colors.textLighter};
  }
`

export const EmailLink = styled(Link)`
  margin-top: 1rem;
`

const appBox = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 15rem;
  background-color: #fafafa;
  border-radius: ${sizes.borderRadius};
  box-shadow: ${boxShadows.medium};
  text-align: center;
  font-size: ${fontSizes._14};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.2);
  }
`

export const AppBoxLink = styled(Link)`
  ${appBox};

  &:hover ${AppDocumentation} {
    color: ${colors.white};
    background-color: ${colors.primary};
  }
`

export const AppBoxStatic = styled.div`
  ${appBox};

  justify-content: center;
  padding: 1rem;
  color: ${colors.textDark};
  background-color: ${colors.white};

  &:hover,
  &:focus {
    color: ${colors.white};
    background-color: ${colors.primary};

    a {
      color: ${colors.white};
    }
  }
`
