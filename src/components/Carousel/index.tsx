import * as React from "react"

import { Wrapper, Container, Inner, Slide, PrevButton, NextButton } from "./Styles"

interface CarouselProps {
  children: React.ReactNode
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [startX, setStartX] = React.useState<number | null>(null)
  const [scrollLeft, setScrollLeft] = React.useState(0)
  const [isSliding, setIsSliding] = React.useState(false)
  const [isCarouselClicked, setIsCarouselClicked] = React.useState(false)
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsCarouselClicked(true)
    setStartX(e.pageX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isCarouselClicked) {
      return
    }

    setIsSliding(true)
    if (!startX) return
    const x = e.pageX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current!.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setStartX(null)
    scrollToClosestSlide()
    setIsSliding(false)
    setIsCarouselClicked(false)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX) return
    const x = e.touches[0].pageX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current!.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setStartX(null)
    scrollToClosestSlide()
    setIsSliding(false)
  }

  const smoothScrollTo = (scrollTo: number) => {
    if (!carouselRef.current) return
    const scrollOptions: ScrollToOptions = {
      left: scrollTo,
      behavior: "smooth",
    }
    carouselRef.current.scrollTo(scrollOptions)
  }

  const scrollToClosestSlide = () => {
    if (!carouselRef.current) return
    const slideWidth = carouselRef.current.offsetWidth / 2 + 8 // Divide by 2 for two slides
    const slideIndex = Math.round(carouselRef.current.scrollLeft / slideWidth)
    const scrollTo = slideIndex * slideWidth
    smoothScrollTo(scrollTo)
  }

  const handlePrevClick = () => {
    if (carouselRef.current && !isSliding) {
      const newPosition = carouselRef.current.scrollLeft - carouselRef.current.offsetWidth
      setIsSliding(true)
      smoothScrollTo(newPosition)
      setTimeout(() => {
        setIsSliding(false)
      }, 300)
    }
  }

  const handleNextClick = () => {
    if (carouselRef.current && !isSliding) {
      const newPosition = carouselRef.current.scrollLeft + carouselRef.current.offsetWidth
      setIsSliding(true)
      smoothScrollTo(newPosition)
      setTimeout(() => {
        setIsSliding(false)
      }, 300)
    }
  }

  return (
    <Wrapper>
      <Container
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Inner $isSliding={isSliding}>
          {React.Children.map(children, (child, index) => (
            <Slide key={index}>{child}</Slide>
          ))}
        </Inner>
      </Container>
      <PrevButton onClick={handlePrevClick}>{"<"}</PrevButton>
      <NextButton onClick={handleNextClick}>{">"}</NextButton>
    </Wrapper>
  )
}

export default Carousel
