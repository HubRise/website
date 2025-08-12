import Link from "next/link"
import styled, { css } from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { colors, mixin } from "@utils/styles"

import { TPosition } from "./index"

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  height: 1.5rem;
`

export const DropdownTrigger = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  ${mixin.clickable};
  ${mixin.linkOver(colors.primary)};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      color: ${colors.primary};

      ${StyledIcon} {
        transform: rotate(180deg);
      }
    `}
`

export const DropdownMenu = styled.div<{ $position: TPosition }>`
  position: absolute;
  top: 2rem;
  width: max-content;
  background-color: ${colors.backgroundWhite};
  border: 1px solid ${colors.borderLight};
  border-radius: 0.75rem;
  box-shadow:
    0px 12px 16px -4px #10182814,
    0px 4px 6px -2px #10182808;

  ${({ $position }) =>
    $position === "left" &&
    css`
      left: -0.5rem;
    `}

  ${({ $position }) =>
    $position === "center" &&
    css`
      left: 50%;
      transform: translate(-50%, 0);
    `}
  
  ${({ $position }) =>
    $position === "bigMenu" &&
    css`
      transform: translate(-62%, 0);
    `}
`

export const DropdownList = styled.ul`
  padding: 0.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const DropdownListItem = styled.li<{ $isActive: boolean }>`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  font-weight: 600;
  color: ${colors.textDarkest};
  ${mixin.linkOver(colors.primary)}

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${colors.backgroundLight};

      &:hover {
        color: ${colors.textDarkest};
      }
    `}
`

export const DropdownListLink = styled(Link)`
  width: 100%;
`

export const DropdownMenuContent = styled.div`
  padding: 1rem;
`
