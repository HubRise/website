import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const Container = styled.div`
  ${mixin.containerWrapper}
  position: relative;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
    gap: 7rem;
  }
`

export const Main = styled.div`
  width: 100%;
  padding-left: 2.5rem;
  position: relative;

  p,
  ul {
    margin-top: 1.25rem;
    ${mixin.responsiveText};
  }

  ul {
    list-style: disc;
    padding-left: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 50%;
    padding-left: 6.25rem;
  }
`

export const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${breakpoints.large}) {
    gap: 0;
  }
`

export const Block = styled.div<{ $isActive: boolean }>`
  transition: all 0.2s ease-in-out;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 15rem;
  }
`

export const Title = styled.h3`
  ${mixin.cardTitle}
`

export const MobileImage = styled(Image)`
  display: block;
  margin: 1.5rem auto 0;

  @media (min-width: ${breakpoints.large}) {
    display: none;
  }
`

export const DesktopImages = styled.div`
  display: none;

  @media (min-width: ${breakpoints.large}) {
    display: block;
    width: 50%;
  }
`

export const DesktopImage = styled(Image)<{ $isActive: boolean }>`
  position: sticky;
  top: 7rem;
  transition: all 0.2s ease-in-out;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
`

export const ProgressBarWrapper = styled.div`
  position: absolute;
  left: 0.375rem;
  top: 0;
  width: 0.25rem;
  height: 100%;
  background-color: ${colors.backgroundLight};
  border-radius: 0.375rem;
`

export const ProgressBar = styled.div<{ $progress: number }>`
  position: relative;
  width: 0.25rem;
  height: ${({ $progress }) => `${$progress}%`};
  max-height: 100%;
  background-color: ${colors.primary};
  border-radius: 0.375rem;
  transition: all 0.2s;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: -0.375rem;
    background-color: ${colors.primary};
    border-radius: 100%;
  }

  &::after {
    filter: blur(0.75rem);
  }
`
