import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { breakpoints, colors } from "@utils/styles"
import { frontpageMixin } from "@layouts/frontpage/Styles"

export const Container = styled.section`
  ${frontpageMixin.row};
  background-color: ${colors.white};
`

export const Inside = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
  }
`

export const Text = styled.div`
  @media (min-width: ${breakpoints.large}) {
    grid-row: 1;
    grid-column: 2;
  }
`

export const Title = styled.h3`
  ${frontpageMixin.title(colors.darkGray, colors.primary, true)};
`

export const Description = styled.div`
  ${frontpageMixin.description(colors.lightGray)};
  margin-bottom: 2em;
`

export const TeamList = styled.ul`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const TeamMember = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em 1em 1em;
`

export const MemberPicture = styled(GatsbyImage)`
  border-radius: 50%;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.2);
`

export const MemberName = styled.div`
  color: ${colors.lightGray};
  margin-top: 0.5em;
`
