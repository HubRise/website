import Link from "next/link"
import styled from "styled-components"

import { buttonStyles, StyledButton } from "@components/Button/Styles"
import { StyledCard } from "@components/Card/Styles"
import { StyledIcon } from "@components/Icon/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const StyledSideBar = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.large}) {
    width: 25rem;
    flex-shrink: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${colors.primary};

  ${StyledButton} {
    margin-top: 0;
    flex-grow: 1;
  }
`

export const SideBarButtonLink = styled.a``

export const SideBarButton = styled.div`
  ${buttonStyles};
  background-color: ${colors.backgroundLight};
  height: 3rem;
  width: 3rem;
  flex-shrink: 0;

  ${StyledIcon} {
    color: #263238;
  }

  &:hover {
    background-color: ${colors.backgroundDarker};

    path {
      fill: ${colors.white};
    }

    ${StyledIcon} {
      color: ${colors.white};
    }
  }
`

export const OtherPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;

  ${StyledCard} {
    &:nth-child(n + 4) {
      display: none;
    }

    @media (min-width: ${breakpoints.large}) {
      &:nth-child(n + 4) {
        display: flex;
      }
    }
  }
`

export const PostLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;
`

export const PostLinkText = styled.span`
  ${fontSizeMixins.text16}
  font-weight: 600;
  color: #636363;
`
