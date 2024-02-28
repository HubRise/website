import * as React from "react"
import { Button, CarouselContainer, CarouselInner, CarouselWrapper, Slide } from "./Styles"

interface CarouselProps {
  children: React.ReactNode
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [touchStartX, setTouchStartX] = React.useState(0)

  const totalSlides = React.Children.count(children)
  const slidesToShow = 2

  const goToNextSlide = () => {
    if (currentIndex < totalSlides - slidesToShow) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX && carouselRef.current) {
      const touchMoveX = event.touches[0].clientX
      const touchDistance = touchMoveX - touchStartX
      const slideWidth = carouselRef.current.offsetWidth / slidesToShow
      const slidesMoved = Math.round(touchDistance / slideWidth)
      setCurrentIndex(Math.max(0, Math.min(currentIndex - slidesMoved, totalSlides - slidesToShow)))
    }
  }

  const handleTouchEnd = () => {
    setTouchStartX(0)
  }

  return (
    <CarouselWrapper
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CarouselContainer>
        <CarouselInner style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
          {React.Children.map(children, (child, index) => (
            <Slide key={index}>{React.cloneElement(child as React.ReactElement)}</Slide>
          ))}
        </CarouselInner>
      </CarouselContainer>
      <Button direction="prev" onClick={goToPrevSlide} disabled={currentIndex === 0}>
        &#10094;
      </Button>
      <Button direction="next" onClick={goToNextSlide} disabled={currentIndex === totalSlides - slidesToShow}>
        &#10095;
      </Button>
    </CarouselWrapper>
  )
}

export default Carousel
