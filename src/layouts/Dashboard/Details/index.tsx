import { clamp, findLastIndex } from "lodash"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import ScreenContainer from "@components/ScreenContainer"
import Underline from "@components/Underline"

import { TContentBlock } from "../types"

import {
  DesktopImage,
  ProgressBarWrapper,
  ProgressBar,
  MobileImage,
  Container,
  Main,
  Blocks,
  Block,
  Title,
  DesktopImages,
} from "./Styles"

interface DetailsProps {
  title: string
  content_blocks: Array<TContentBlock>
}

const Details = ({ title, content_blocks }: DetailsProps): JSX.Element => {
  const detailsContainerRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const blockTops = useRef<number[]>([])

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [readingY, setReadingY] = useState<number>(0)

  useLayoutEffect(() => {
    const calculateReadingY = () => setReadingY(window.scrollY + window.innerHeight * 0.4)

    const handleScroll = calculateReadingY
    const handleResize = () => {
      calculateReadingY()

      const calculateBlockTops = () =>
        (blockTops.current = contentRefs.current.map((ref) => ref!.getBoundingClientRect().top + window.scrollY))
      calculateBlockTops()
      setTimeout(calculateBlockTops, 250) // Let transitions and layout settle then recalculate
    }
    handleScroll()
    handleResize()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    // Select a block as soon as the reading position is below 70% of the way to the next block
    const factor = 0.7
    const thresholds = blockTops.current.map((top, index) =>
      index === 0 ? top : blockTops.current[index - 1] + (top - blockTops.current[index - 1]) * factor,
    )
    const activeIndex = findLastIndex(thresholds, (top) => top <= readingY)
    setActiveIndex(activeIndex == -1 ? 0 : activeIndex)
  }, [readingY])

  useEffect(() => {
    if (detailsContainerRef.current) {
      const { offsetTop, clientHeight } = detailsContainerRef.current
      const progress = ((readingY - offsetTop) / clientHeight) * 100
      setProgress(clamp(progress, 0, 100))
    }
  }, [readingY])

  return (
    <ScreenContainer title={title} withHeader bgColor="white" overflowVisible>
      <Container ref={detailsContainerRef}>
        <Main>
          <ProgressBarWrapper>
            <ProgressBar $progress={progress} />
          </ProgressBarWrapper>

          <Blocks>
            {content_blocks.map(({ title, content, image }, index) => {
              return (
                <Block
                  key={index}
                  ref={(el) => void (contentRefs.current[index] = el)}
                  $isActive={activeIndex === index}
                >
                  <Title>{title}</Title>
                  <Underline />
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                  <MobileImage src={`/images/dashboard/details/${image}`} alt={title} width={765} height={535} />
                </Block>
              )
            })}
          </Blocks>
        </Main>

        <DesktopImages>
          {content_blocks.map(({ title, image }, index) => (
            <DesktopImage
              key={index}
              src={`/images/dashboard/details/${image}`}
              width={765}
              height={535}
              alt={title}
              $isActive={activeIndex === index}
              $top={blockTops.current[index] - blockTops.current[0]}
              $shiftToTop={index !== 0}
            />
          ))}
        </DesktopImages>
      </Container>
    </ScreenContainer>
  )
}

export default Details
