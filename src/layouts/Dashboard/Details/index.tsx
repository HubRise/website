import Image from "next/image"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

import ScreenContainer from "@components/ScreenContainer"
import Underline from "@components/Underline"

import { TContentBlock } from "../types"

import {
  DetailsContainer,
  DetailsWrapper,
  ContentContainer,
  ContentBlock,
  ContentWrapper,
  ContentTitle,
  ImageBlock,
  ProgressBarWrapper,
  ProgressBar,
} from "./Styles"

interface DetailsProps {
  title: string
  content_blocks: Array<TContentBlock>
}

const Details = ({ title, content_blocks }: DetailsProps): JSX.Element => {
  const detailsContainerRef = useRef<HTMLDivElement>(null)
  const [scrollYOffset, setScrollYOffset] = useState<number>(0)
  const [activeDetailsView, setActiveDetailsView] = useState<number>(1)
  const [progress, setProgress] = useState<number>(0)

  const handleScroll = useCallback(() => {
    setScrollYOffset(window.scrollY)
  }, [])

  useLayoutEffect(() => {
    setScrollYOffset(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    if (detailsContainerRef.current) {
      if (scrollYOffset < detailsContainerRef.current?.offsetTop + 240) {
        setActiveDetailsView(1)
      } else if (
        scrollYOffset > detailsContainerRef.current?.offsetTop + 230 &&
        scrollYOffset < detailsContainerRef.current?.offsetTop + 660
      ) {
        setActiveDetailsView(2)
      } else if (
        scrollYOffset > detailsContainerRef.current?.offsetTop + 650 &&
        scrollYOffset < detailsContainerRef.current?.offsetTop + 1150
      ) {
        setActiveDetailsView(3)
      } else if (scrollYOffset > detailsContainerRef.current?.offsetTop + 1050) {
        setActiveDetailsView(4)
      }
    }
  }, [scrollYOffset])

  useEffect(() => {
    if (detailsContainerRef.current) {
      if (scrollYOffset <= detailsContainerRef.current?.offsetTop - 250) {
        setProgress(0)
      } else if (
        scrollYOffset >= detailsContainerRef.current?.offsetTop - 250 &&
        scrollYOffset <= detailsContainerRef.current?.offsetTop + detailsContainerRef.current?.clientHeight
      ) {
        setProgress(
          Math.ceil(
            ((scrollYOffset - detailsContainerRef.current?.offsetTop + 350) /
              detailsContainerRef.current?.clientHeight) *
              100,
          ),
        )
      } else if (scrollYOffset >= detailsContainerRef.current?.offsetTop + detailsContainerRef.current?.clientHeight) {
        setProgress(100)
      }
    }
  }, [scrollYOffset, progress])

  return (
    <DetailsContainer>
      <ScreenContainer title={title} withHeader bgColor="white">
        <DetailsWrapper ref={detailsContainerRef}>
          <ContentBlock $activeDetailsView={activeDetailsView}>
            <ProgressBarWrapper>
              <ProgressBar $progress={progress} />
            </ProgressBarWrapper>
            <ContentContainer>
              {content_blocks.map(({ title, content, image }, Idx) => {
                return (
                  <ContentWrapper key={Idx}>
                    <ContentTitle>{title}</ContentTitle>
                    <Underline />
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    <Image src={`/images/dashboard/details/${image}`} alt={title} width={765} height={535} />
                  </ContentWrapper>
                )
              })}
            </ContentContainer>
          </ContentBlock>
          <ImageBlock $activeDetailsView={activeDetailsView}>
            {content_blocks.map(({ title, image }, Idx) => {
              return <Image key={Idx} src={`/images/dashboard/details/${image}`} alt={title} width={765} height={535} />
            })}
          </ImageBlock>
        </DetailsWrapper>
      </ScreenContainer>
    </DetailsContainer>
  )
}

export default Details
