import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const StyledCopyright = styled.div`
  background-color: ${colors.textDarkest};
`

export const Container = styled.div`
  padding: 0.8em 0 0.5em 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  justify-items: center;
  align-items: center;

  ${mixin.container};

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 3fr 1fr 3fr;
  }
`

export const Company = styled.div`
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    text-align: left;
  }
`

export const Logo = styled.img`
  position: relative;
  bottom: 0.15em;
`

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.large}) {
    justify-content: flex-end;
  }
`

const contactGap = "0.75rem"

export const EmailLink = styled(Link)`
  color: ${colors.white};
  ${mixin.linkOver(colors.primary)};

  &:after {
    content: "●";
    display: inline-block;
    margin-left: ${contactGap};
    font-size: ${fontSizes._12};
    color: ${colors.textMedium};
  }
`

export const SocialLink = styled(Link)`
  margin-left: ${contactGap};
  ${mixin.centerElement};

  svg {
    width: 1.3rem;
    height: 1.3rem;
    fill: ${colors.white};
    transition: fill 0.2s ease;

    :hover {
      fill: ${colors.primary};
    }
  }
`
