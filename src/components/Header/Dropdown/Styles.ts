import Link from "next/link"
import styled, { css } from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { colors, mixin } from "@utils/styles"

import { TPosition } from "./index"

export const DropdownOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 999;
`

export const DropdownMenuWrapper = styled.div<{ $position: TPosition }>`
  top: 1.5rem;
  padding-top: 0.5rem;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  pointer-events: none;
  z-index: 1000;

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

export const DropdownMenu = styled.div`
  width: max-content;
  background-color: ${colors.backgroundWhite};
  border: 1px solid ${colors.borderLight};
  border-radius: 0.75rem;
  box-shadow:
    0 12px 16px -4px #10182814,
    0 4px 6px -2px #10182808;
`

export const DropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: color 0.2s ease;
  ${mixin.clickable};

  ${StyledIcon} {
    transition: transform 0.2s ease;
  }
`

export const DropdownContainer = styled.div<{ $isOpen?: boolean }>`
  position: relative;
  display: flex;
  height: 1.5rem;
  padding: 1rem;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      ${DropdownTrigger} {
        color: ${colors.primary};
      }

      ${DropdownMenuWrapper} {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      ${DropdownTrigger} ${StyledIcon} {
        transform: rotate(180deg);
      }

      ~ ${DropdownOverlay} {
        opacity: 1;
        visibility: visible;
      }
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
