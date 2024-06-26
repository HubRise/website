import styled from "styled-components"

import { breakpoints, colors, sizes } from "@utils/styles"

export const Container = styled.div`
  margin: ${sizes.blockVerticalPadding} 0;
`

const sidebarBackgroundColor = colors.backgroundLightest

export const Inner = styled.div`
  position: relative;
  max-width: ${sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    &:before {
      content: "";
      background-color: ${sidebarBackgroundColor};
      position: absolute;
      width: calc((100vw - 100%) / 2);
      right: 100%;
      top: 0;
      height: 100%;
    }
  }
`

export const StyledSidebar = styled.div`
  background-color: ${sidebarBackgroundColor};
  width: 100%;

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    width: 25%;
    padding: ${sizes.blockVerticalPadding} 0;
  }
`

export const StyledContent = styled.div`
  background-color: ${colors.backgroundWhite};
  width: 100%;
  padding: ${sizes.blockVerticalPadding} ${sizes.mobilePadding};

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    width: 75%;
    padding: ${sizes.blockVerticalPadding} ${sizes.desktopPadding};
  }
`
