import Image from "next/image"
import styled from "styled-components"

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

export const MemberImage = styled(Image)`
  border-radius: 50%;
  box-shadow: ${boxShadows.large};
  width: 8rem;
`

export const MemberName = styled.div``
