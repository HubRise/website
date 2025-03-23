import styled, { css } from "styled-components"

import Icon from "@components/Icon"
import { colors, mixin, sizes, zIndexValues, iconSizes, boxShadows, breakpoints } from "@utils/styles"

export const StyledNav = styled.div<{ $isSticky: boolean }>`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  background-color: ${colors.white};
  padding: 0.5rem 0.625rem;
  transition: background-color 0.1s ease-in-out;

  @media (min-width: ${breakpoints.large}) {
    padding: 0.5rem 0.625rem;
  }

  ${(props) =>
    props.$isSticky &&
    css`
      padding-bottom: 0.5rem !important;
      background-color: ${colors.primary};
    `}
`

export const Container = styled.div<{ $isSticky: boolean }>`
  max-width: ${sizes.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${colors.backgroundLight};
  position: relative;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  border-radius: 0.5rem;
`

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-right: 1px solid ${colors.borderLight};
  flex-grow: 0;
  flex-shrink: 1;
`

export const Input = styled.input`
  width: 100%;
  height: 1.5625rem;
  font-size: 1rem;
  line-height: 1;
  border: none;
  background-color: ${colors.backgroundLight};
  color: ${colors.textDark};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.textDark};
  }
`

export const CategoryFilterWrapper = styled.div`
  margin-left: 0.5rem;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;

  @media (min-width: ${breakpoints.large}) {
    margin-left: 1rem;
  }
`

export const CategoryFilter = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.textDarkest};
  ${mixin.clickable}
`

export const CategoryList = styled.ul<{ $isExpanded: boolean }>`
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 0;
  width: 100%;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: ${boxShadows.large};
  text-align: left;

  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease-in;
  ${mixin.clickable}

  background-color: ${({ $isActive }) => ($isActive ? colors.backgroundLight : colors.white)};
  color: ${({ $isActive }) => ($isActive ? colors.primary : colors.textDark)};

  &:hover {
    background-color: ${colors.backgroundLight};
  }
`

export const CheckIcon = styled(Icon).attrs({ size: iconSizes._20 })`
  color: ${colors.primary};
`

export const ArrowIcon = styled(Icon).attrs({ size: iconSizes._25 })`
  color: ${colors.textDarkest};
  margin-left: 0.25;

  @media (min-width: ${breakpoints.large}) {
    margin-left: 0.5rem;
  }
`

export const SearchIcon = styled(Icon).attrs({ size: iconSizes._25 })`
  color: ${colors.textDark};
  margin-right: 0.25;

  @media (min-width: ${breakpoints.large}) {
    margin-right: 0.5rem;
  }
`

export const WhiteBlock = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: ${colors.white};
  margin-top: -1px;

  @media (min-width: ${breakpoints.large}) {
    height: 5rem;
  }
`
