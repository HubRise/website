import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, fontSizes, sizes } from "@utils/styles"

export const Wrapper = styled.div`
  background-color: ${colors.white};

  position: relative;
  max-width: ${sizes.maxWidth};
  width: 100%;

  margin: 0 auto;
  margin-top: 8.75rem;
  margin-bottom: 8.75rem;

  padding-top: 135px;
  padding-bottom: 55px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  @media (min-width: ${breakpoints.large}) {
    padding-left: 7.85rem;
    padding-right: 7.85rem;
    margin-top: 9.75rem;
    margin-bottom: 9.75rem;
  }
`

export const ImageWrapper = styled.picture`
  width: 100%;
  max-width: 12.06rem;
  aspect-ratio: 1/1;

  border-radius: 100%;

  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImagenPerson = styled(Image)`
  width: 100%;
  height: 100%;
`

export const Description = styled.p`
  font-style: italic;
  font-size: ${fontSizes._16};
  text-align: center;
  color: ${colors.textLight};
`

export const Separator = styled.div`
  margin: 1.25rem auto;
  height: 3px;
  width: 8.875rem;
  background-color: ${colors.borderMedium};
`

export const InfoWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
`

export const Info = styled.span`
  position: relative;

  text-align: center;
  flex-shrink: 1;
  flex-grow: 0;

  font-size: ${fontSizes._16};
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
`

export const Decorator = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  margin-right: 0.625rem;
  margin-left: 0.625rem;
  width: 5px;
  height: 5px;
  background-color: ${colors.borderMedium};
  border-radius: 100%;
`
