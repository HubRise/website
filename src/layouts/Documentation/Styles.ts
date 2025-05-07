import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, mixin, sizes, zIndexValues } from "@utils/styles"

const gap = "1rem"

export const Page = styled.div`
  max-width: ${sizes.maxWidth};
  margin: ${sizes.blockVerticalPadding} auto;

  @media (min-width: ${breakpoints.large}) {
    display: grid;
    align-items: start;
    gap: 0 ${gap};
    grid-template-columns: 75% 25%;
    grid-template-areas: "warning warning" "main logo" "main navigation";
    grid-template-rows: min-content min-content 1fr;
  }
`

export const Warning = styled.div`
  grid-area: warning;
  margin-bottom: ${gap};
  padding: 0.75rem 1rem;

  color: ${colors.textDark};
  background-color: ${colors.warning};

  position: relative;
  ${mixin.expandBefore({ width: "calc(50vw - 50%)", color: colors.warning })};
`

export const Main = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: ${gap};
`

export const Content = styled.div`
  padding: ${sizes.blockVerticalPadding} 0.9375rem;
  background-color: ${colors.backgroundWhite};

  @media (min-width: ${breakpoints.large}) {
    position: relative;
    ${mixin.expandBefore({ width: "100vw", color: colors.backgroundWhite })};
  }
`

export const LogoLink = styled(Link)`
  grid-area: logo;
  margin-bottom: ${gap};
  padding: ${sizes.mobilePadding};
  background-color: ${colors.backgroundWhite};
  line-height: 0;
  ${mixin.centerElement};

  @media (min-width: ${breakpoints.large}) {
    padding: ${sizes.desktopPadding};
  }
`

export const LogoImage = styled(Image)`
  max-height: 3rem;
  object-fit: contain;

  @media (min-width: ${breakpoints.large}) {
    max-height: unset;
  }
`

export const Navigation = styled.div`
  grid-area: navigation;
  background-color: ${colors.backgroundWhite};

  position: sticky;
  top: calc(${sizes.headerHeight} + ${gap});

  @media (max-width: ${breakpoints.large}) {
    top: ${sizes.headerHeight};
    z-index: ${zIndexValues.header};
  }
`
