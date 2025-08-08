import styled, { css } from "styled-components"

import { Container } from "@components/ScreenContainer/Styles"
import { breakpoints, colors, mixin } from "@utils/styles"

export const DetailsContainer = styled.div`
  ${Container} {
    overflow: visible;
  }
`

export const DetailsWrapper = styled.div`
  ${mixin.containerWrapper}
  margin-top: 3.5rem;
  display: flex;
  column-gap: 7rem;
  flex-direction: column;
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${breakpoints.large}) {
    gap: 0;
  }
`

export const ContentWrapper = styled.div`
  img {
    display: block;
    margin: 1.5rem auto 0;
  }

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 15rem;
    opacity: 0.2;
    transition: all 0.2s ease-in-out;

    img {
      display: none;
    }
  }
`

export const ContentBlock = styled.div<{ $activeDetailsView: number }>`
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

  ${ContentWrapper} {
    ${({ $activeDetailsView }) => css`
      &:nth-child(${$activeDetailsView}) {
        opacity: 1;
      }
    `};
  }
`

export const ContentTitle = styled.h3`
  ${mixin.cardTitle}
`

export const ImageBlock = styled.div<{ $activeDetailsView: number }>`
  display: none;

  @media (min-width: ${breakpoints.large}) {
    display: block;
    width: 50%;

    img {
      position: sticky;
      top: 7rem;
      opacity: 0;
      transition: all 0.2s ease-in-out;

      ${({ $activeDetailsView }) => css`
        &:nth-child(${$activeDetailsView}) {
          opacity: 1;
        }
      `};
    }
  }
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
  width: 0.25rem;
  height: ${({ $progress }) => `${$progress}%`};
  max-height: 100%;
  background-color: ${colors.primary};
  border-radius: 0.375rem;
  transition: all 0.2s;
  position: relative;

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
    filter: blur(0.75rem);
  }

  &::before {
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
`
