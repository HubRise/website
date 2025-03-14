import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import ScreenContainer from "@components/ScreenContainer"

import { TDiscover } from "../types"

import { Buttons } from "./Styles"

interface FiveStepsProps {
  discoverContent: TDiscover
  descriptionMdx: MDXRemoteSerializeResult
}

const Discover = ({ discoverContent, descriptionMdx }: FiveStepsProps) => {
  const { title, buttons } = discoverContent
  return (
    <ScreenContainer
      bgColor="green"
      verticalPadding="small"
      withHeader
      withDivider={false}
      title={title}
      isTextCentered
      descriptionMdx={descriptionMdx}
    >
      <Buttons>
        {buttons.map(({ button_label, button_link }, index) => {
          return <Button type="secondary" key={index} label={button_label} link={button_link} />
        })}
      </Buttons>
    </ScreenContainer>
  )
}

export default Discover
