"use client"

import ActionBlock from "@components/ActionBlock"
import GetInTouch from "@components/GetInTouch"
import { GetInTouchYaml } from "@components/GetInTouch/types"

import Details from "./Details"
import Features from "./Features"
import Hero from "./Hero"
import { DashboardYaml } from "./types"

interface DashboardProps {
  yaml: DashboardYaml
  getInTouch: GetInTouchYaml
}

const Dashboard = ({ yaml, getInTouch }: DashboardProps): JSX.Element => {
  const content = yaml.content
  const { title, description, button_label, button_link } = getInTouch.content

  return (
    <>
      <Hero hero={content.hero} />
      <Features {...content.features} />
      <Details {...content.details} />
      <ActionBlock actionBlockData={content.action_block} />
      <GetInTouch title={title} description={description} button_label={button_label} button_link={button_link} />
    </>
  )
}

export default Dashboard
