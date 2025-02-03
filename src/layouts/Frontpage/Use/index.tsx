import Image from "next/image"
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"
import { useEffect, useState } from "react"

import Block from "@components/Block"
import GreyContainer from "@components/GreyContainer"
import { getWindowDimensions, TWindowSize } from "@utils/misc"

import { TUseBlock } from "../types"

import { Title, Description, Blocks, BlockTitle, BlockText } from "./Styles"

interface UseProps {
  title: string
  use_blocks: Array<TUseBlock>
  descriptionMdx: MDXRemoteSerializeResult
}

const Use = ({ title, use_blocks, descriptionMdx }: UseProps): JSX.Element => {
  const [windowSize, setWindowSize] = useState<TWindowSize>(getWindowDimensions())

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <GreyContainer>
      <Title>{title}</Title>
      <Description>
        <MDXRemote {...descriptionMdx} />
      </Description>
      <Blocks>
        {use_blocks.map(({ title, description, image, width, desktop_width }, index) => {
          return (
            <Block backgroundColor="white" padding="small" key={index}>
              <Image
                src={`/images/frontpage/${image}`}
                alt={title}
                width={windowSize.width >= 1440 ? width : desktop_width}
                height={290}
              />
              <div>
                <BlockTitle>{title}</BlockTitle>
                <BlockText>{description}</BlockText>
              </div>
            </Block>
          )
        })}
      </Blocks>
    </GreyContainer>
  )
}

export default Use
