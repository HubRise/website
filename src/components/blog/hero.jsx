import React from 'react'
import styled from 'styled-components'

import { colors } from '../../constants/theme'

function Hero({ title, description }) {
  return (
    <Section>
      <Inner>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  margin: 75px auto;
  max-width: 1200px;
  width: 100%;
`

const Inner = styled.div`
  padding: 75px 120px;
  background-color: ${colors.green};
  position: relative;
  text-align: center;
`

const Title = styled.h2`
  color: ${colors.white};
  font-weight: bold;
  font-size: 2.625rem;
  position: relative;
  margin-bottom: 2.5rem;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin: 10px auto;
    width: 15%;
    height: 3px;
    background: ${colors.white};
  }
`

const Description = styled.p`
  color: ${colors.white};
  font-weight: 400;
  text-align: center;
  margin-top: 0;
`

export default Hero
