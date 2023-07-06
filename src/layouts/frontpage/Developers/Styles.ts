import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { boxShadows } from "@utils/styles"

export const TeamList = styled.ul`
  align-self: center;
  margin-top: 1rem;
  max-width: 40rem;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem 2rem;
  justify-content: center;
`

export const TeamMember = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const MemberPicture = styled(GatsbyImage)`
  border-radius: 50%;
  box-shadow: ${boxShadows.large};
`

export const MemberName = styled.div``
