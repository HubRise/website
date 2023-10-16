import Link from "next/link"
import styled, { css } from "styled-components"

import Icon from "@components/Icon"
import { colors, mixin, sizes, zIndexValues, iconSizes, boxShadows, breakpoints } from "@utils/styles"

export const StyledNav = styled.div<{ $isSticky: boolean }>`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  padding: 0.5rem 0;

  ${(props) =>
    props.$isSticky &&
    css`
      background-color: ${colors.primary};
    `}
`

export const Container = styled.div`
  max-width: ${sizes.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    border-radius: ${sizes.borderRadius};
    padding-left: 1.56rem;
    padding-right: 1.56rem;
  }
`

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-right: 2px solid ${colors.backgroundLight};
  flex-grow: 0;
  flex-shrink: 1;
`

export const Input = styled.input`
  width: 100%;
  height: 1.5625rem;
  font-size: 1rem;
  line-height: 1;
  border: none;
  &:focus {
    outline: none;
  }
`

export const CategoryFitlerWrapper = styled.div`
  margin-left: 0.5rem;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;

  @media (min-width: ${breakpoints.large}) {
    margin-left: 1.56rem;
  }
`

export const CategoryFitler = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.primary};
`

export const CategoryList = styled.ul<{ $isExpanded: boolean }>`
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 0;
  width: 100%;
  background-color: ${colors.white};
  border-radius: ${sizes.borderRadius};
  box-shadow: ${boxShadows.large};

  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  ${(props) =>
    props.$isExpanded &&
    css`
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    `}

  @media (min-width: ${breakpoints.large}) {
    right: 0;
    left: unset;
    width: auto;
  }
`

export const CategoryItem = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${colors.backgroundLight};
  }

  color: ${({ $isActive }) => ($isActive ? colors.primary : colors.textDark)};
`

export const ArrowIcon = styled(Icon).attrs({ size: iconSizes._25 })`
  color: ${colors.primary};
  margin-left: 0.25;

  @media (min-width: ${breakpoints.large}) {
    margin-left: 0.5rem;
  }
`

export const SearchIcon = styled(Icon).attrs({ size: iconSizes._25 })`
  margin-right: 0.25;

  @media (min-width: ${breakpoints.large}) {
    margin-right: 0.5rem;
  }
`

export const List = styled.ul`
  ${mixin.container};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Item = styled.li<{ $isSticky: boolean }>`
  ${({ $isSticky }) => mixin.dotSeparatedList("0.5rem", $isSticky ? colors.white : undefined)};
  line-height: 2rem;
`

export const StyledLink = styled(Link)<{ $isActive: boolean; $isSticky: boolean }>`
  color: ${({ $isActive }) => ($isActive ? colors.primary : colors.textDark)};
`
