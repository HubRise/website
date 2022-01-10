import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { breakpoints, colors } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const Group = styled.div`
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  margin-top: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    grid-gap: 2em;
  }
`
export const AppLogo = styled(GatsbyImage)`
  height: 100px;
  width: 100%;
  padding: 1em;

  @media (min-width: ${breakpoints.medium}) {
    height: 153px;
  }
`

const additionalInfoGap = "1rem"

export const AppDocumentation = styled.div`
  padding: 1em;
  color: ${colors.gray};
  background-color: #ffffff;
  transition: background-color 0.2s ease;
`

export const AppDescription = styled.div`
  margin: 1em 1em ${additionalInfoGap} 1em;
  flex: 1;
  line-height: 1.3;
  font-weight: 400;
  color: ${colors.gray};
`

export const AppAdditionalInfo = styled.div`
  margin: 0 1em 1em 1em;
  font-size: 0.75rem;
  color: ${colors.lightGray};
  font-style: italic;

  &::before {
    display: block;
    content: "";
    width: 1.5em;
    margin: 0 auto ${additionalInfoGap} auto;
    height: 1px;
    background-color: ${colors.silverGray};
  }
`

export const EmailLink = styled(Link)`
  margin-top: 1em;
`

const appBox = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 15em;
  background-color: #fafafa;
  border-radius: 3px;
  box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 0.9375rem;
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
  padding: 1em;
  color: ${colors.gray};
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
