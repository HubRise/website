import Image from "next/image"
import Link from "next/link"
import styled, { css } from "styled-components"

import { boxShadows, breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

export const Group = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  margin-top: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    grid-gap: 2rem;
  }
`
export const AppLogo = styled.div`
  height: 100px;
  padding: 0.5rem 1rem;
  ${mixin.centerElement};

  @media (min-width: ${breakpoints.medium}) {
    height: 153px;
    padding: 0.75rem 1rem;
  }
`

export const AppLogoImage = styled(Image)`
  max-height: 100%;
  object-fit: contain;
`

export const AppDocumentation = styled.div`
  padding: 1rem;
  color: ${colors.textDark};
  background-color: ${colors.backgroundWhite};
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

export const EmailLink = styled.a`
  margin-top: 1rem;
`

const appBox = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 15rem;
  background-color: ${colors.backgroundLightest};
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
